import React from "react";
import style from "./style.module.scss";
import classNames from "classnames";

const PhilosophyDrawerContents: React.FC = () => (
  <div
    onWheel={(event) => {
      event.stopPropagation();
    }}
    className={style.PhilosophyDrawer__contents}
  >
    <h3 className={style.PhilosophyDrawer__title}>Philosophy</h3>
    <div className={style.PhilosophyDrawer__separator} />
    <div className={style.PhilosophyDrawer__texts}>
      <p className={style.PhilosophyDrawer__text}>
        「我思う故に我あり」
        <br />
        <br />
        フランスの哲学者デカルトは言います。
        <br />
        デカルトは自身の存在を疑いますが、そう思考することで思考している自身の精神の存在は確かなものだという考えです。
        <br />
        そして、存在を認識できる自身の精神は、身体とは別の実体であると主張しています。
        <br />
        <br />
        私たち人間は五感があり、五感を持って世界を知覚しています。
        <br />
        モノを見て、触れ、叩いて音をだしたり、または、口に入れたり、五感を通して対象物を認識しているとき、美しい、気持ちがいい、
        <br />
        おいしいといった感動も同時に持ち得ます。
        <br />
        <br />
        五感を通して、感動した時、
        <br />
        私たち人間は自身の存在を、相対的に強く捉えられていないでしょうか。
        <br />
        たとえば、森の中を歩いている時、私は自身の五感が研ぎ澄まされているような感覚をもつことがあります。
        <br />
        踏み締める枝、頬を伝う風、刻々と移ろう景色、どこかで鳴く鳥の声といった複合的で膨大な外部からの刺激を受け止めているとき、
        <br />
        一方で体内の呼吸、心臓の音、血流を強く感じる瞬間があります。
        <br />
        外部からの刺激から自身の存在を相対的に認識できる、そんな生きている感覚ともいえるような感動を持つのです。
        <br />
        <br />
        そういった五感が研ぎ澄まされる感覚と時間を、
        <br />
        ”良い気配”と私たちは捉えます
        <br />
        ”良い気配”は、
        <br />
        あなたに世界を知覚する解像度を高めると同時に、
        <br />
        自身の存在を確かなものであると肯定させる喜びがあると信じて、
        <br />
        私たちは、生活の中に”良い気配”を与えるデザインを目指しています。
      </p>
      <p className={style.PhilosophyDrawer__textEnglish}>
        "I think, therefore I am."
        <br />
        <br />
        The French philosopher Descartes famously stated this. Descartes doubted
        his own existence, but through this very act of thinking, he confirmed
        the existence of his thinking mind. He asserted that the mind, capable
        of recognizing its existence, is a distinct entity separate from the
        body.
        <br />
        <br />
        We humans have five senses, through which we perceive the world. We see,
        touch, create sounds by striking objects, or taste them, recognizing
        things through our senses. When we do so, we simultaneously experience
        emotions such as beauty, comfort, and deliciousness.
        <br />
        <br />
        When we are moved through our senses, do we not perceive our own
        existence more intensely? For instance, while walking in the forest, I
        sometimes feel that my senses are heightened. As I take in the
        multifaceted and vast external stimuli—crunching branches underfoot,
        wind brushing my cheeks, the ever-changing scenery, the call of birds
        somewhere in the distance—I simultaneously become acutely aware of my
        internal sensations: my breathing, heartbeat, and blood flow. This
        heightened perception from external stimuli allows us to recognize our
        existence in a relative manner, giving us a sense of being truly alive.
        <br />
        <br />
        We interpret this sense of heightened perception and time as a "good
        presence." We believe that a "good presence" not only enhances your
        resolution of perceiving the world but also brings the joy of affirming
        your own existence as a certain reality. With this belief, we strive to
        design a life filled with "good presence."
      </p>
    </div>
  </div>
);

type PhilosophyDrawerProps = {
  isDisplayed: boolean;
  setIsDisplayed(): void;
};

const PhilosophyDrawer: React.FC<PhilosophyDrawerProps> = ({
  isDisplayed = false,
  setIsDisplayed = () => {},
}) => {
  return (
    <>
      <div
        id="PhilosophyDrawer"
        className={classNames(
          style.PhilosophyDrawer,
          isDisplayed ? style["PhilosophyDrawer--displayed"] : ""
        )}
      >
        <PhilosophyDrawerContents />
      </div>
      <button
        onClick={setIsDisplayed}
        className={classNames(
          style.PhilosophyDrawerCloseButton,
          isDisplayed ? style["PhilosophyDrawerCloseButton--displayed"] : ""
        )}
      >
        <span className={style.PhilosophyDrawerCloseButton__line} />
      </button>
    </>
  );
};

export default PhilosophyDrawer;
