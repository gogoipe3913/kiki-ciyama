import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./App.module.scss"; // CSS Modules
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

// 画像をテクスチャにしたplaneを扱うクラス
class ImagePlane {
  private refImage: HTMLImageElement;
  private mesh: THREE.Mesh;
  private canvasSize: { w: number; h: number };
  private initialPosition: { x: number; y: number }; // 初期位置を保存

  constructor(
    mesh: THREE.Mesh,
    img: HTMLImageElement,
    canvasSize: { w: number; h: number }
  ) {
    this.refImage = img;
    this.mesh = mesh;
    this.canvasSize = canvasSize;

    // 初期位置を計算して保存
    const rect = img.getBoundingClientRect();
    this.initialPosition = {
      x: rect.left - canvasSize.w / 2 + rect.width / 2,
      y: -rect.top + canvasSize.h / 2 - rect.height / 2,
    };

    this.setParams(); // 初期設定を一度だけ行う
  }

  // 初期設定: 画像のスケールと初期位置を設定
  setParams() {
    const rect = this.refImage.getBoundingClientRect();

    // 画像サイズに合わせてスケールを設定
    this.mesh.scale.set(rect.width, rect.height, 1);

    // 初期位置を使用して設定
    this.mesh.position.set(
      this.initialPosition.x,
      this.initialPosition.y,
      this.mesh.position.z
    );
  }

  // 毎フレーム呼び出される時間の更新
  update() {
    (this.mesh.material as THREE.ShaderMaterial).uniforms.uTime.value += 0.05; // 時間だけを更新
  }

  // リサイズ時に位置を再設定
  resize(newCanvasSize: { w: number; h: number }) {
    this.canvasSize = newCanvasSize;

    // 初期位置を基に再計算
    const rect = this.refImage.getBoundingClientRect();
    this.initialPosition = {
      x: rect.left - this.canvasSize.w / 2 + rect.width / 2,
      y: -rect.top + this.canvasSize.h / 2 - rect.height / 2,
    };

    this.setParams(); // 再設定
  }
}

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvasEl = canvasRef.current;
    const canvasSize = { w: window.innerWidth, h: window.innerHeight };

    const renderer = new THREE.WebGLRenderer({ canvas: canvasEl });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvasSize.w, canvasSize.h);

    const fov = 60;
    const fovRad = (fov / 2) * (Math.PI / 180);
    const dist = canvasSize.h / 2 / Math.tan(fovRad);
    const camera = new THREE.PerspectiveCamera(
      fov,
      canvasSize.w / canvasSize.h,
      0.1,
      1000
    );
    camera.position.z = dist;

    const scene = new THREE.Scene();
    const loader = new THREE.TextureLoader();

    const createMesh = (img: HTMLImageElement) => {
      const texture = loader.load(img.src); // テクスチャを一度だけ読み込む
      const uniforms = {
        uTexture: { value: texture },
        uImageAspect: { value: img.naturalWidth / img.naturalHeight },
        uPlaneAspect: { value: img.clientWidth / img.clientHeight },
        uTime: { value: 0 },
      };
      const geo = new THREE.PlaneGeometry(1, 1, 100, 100); // スケールは後で変更
      const mat = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
      });
      return new THREE.Mesh(geo, mat);
    };

    const imagePlaneArray: ImagePlane[] = [];

    const imageArray = [...document.querySelectorAll("img")];
    for (const img of imageArray) {
      const mesh = createMesh(img);
      scene.add(mesh);

      const imagePlane = new ImagePlane(mesh, img, canvasSize);
      imagePlaneArray.push(imagePlane); // 初期化時に画像を追加
    }

    const loop = () => {
      for (const plane of imagePlaneArray) {
        plane.update(); // 毎フレームupdateを呼び出し、時間を更新
      }
      renderer.render(scene, camera);
      requestAnimationFrame(loop);
    };

    loop();

    // ウィンドウサイズ変更時の処理
    const handleResize = () => {
      const newCanvasSize = { w: window.innerWidth, h: window.innerHeight };

      renderer.setSize(newCanvasSize.w, newCanvasSize.h);
      camera.aspect = newCanvasSize.w / newCanvasSize.h;
      camera.updateProjectionMatrix();

      // 画像の位置とサイズを再設定
      for (const plane of imagePlaneArray) {
        plane.resize(newCanvasSize);
      }
    };

    window.addEventListener("resize", handleResize);

    // クリーンアップ処理
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.webglCanvas}>
        <canvas
          ref={canvasRef}
          id="webgl-canvas"
          className={styles.webglCanvas__body}
        ></canvas>
      </div>
      <div className={styles.container}>
        <ul className={styles.imageList}>
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <li key={i} className={styles.imageItem}>
                <a href="" className={styles.imageWrapper}>
                  <img
                    src="https://photograph.kiki-ciyama.com/images/spoon/spoon_4.webp"
                    alt=""
                    className={styles.imageBody}
                  />
                </a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default App;
