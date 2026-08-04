import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { HookScene } from "./scenes/HookScene";
import { FootageScene } from "./scenes/FootageScene";
import { TextCardScene } from "./scenes/TextCardScene";
import { OutroScene } from "./scenes/OutroScene";
import { InstagramChrome } from "./components/InstagramChrome";

const T = linearTiming({ durationInFrames: 12 });

export const ViralReel: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: "black" }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={60} name="Hook">
          <HookScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={fade()} timing={T} />
        <TransitionSeries.Sequence durationInFrames={180} name="Дубай Сафари Парк">
          <FootageScene
            src="dubai/clip-1.mp4"
            badge="Любой возраст ✅"
            caption={"Дубай Сафари Парк —\nзоны по континентам, коляска проедет везде"}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={T} />
        <TransitionSeries.Sequence durationInFrames={180} name="Сафари в пустыне">
          <FootageScene
            src="dubai/clip-2.mp4"
            badge="От 4 лет"
            caption={"Сафари по дюнам —\nтолько если ребёнок хорошо переносит тряску"}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={T} />
        <TransitionSeries.Sequence durationInFrames={270} name="Набережные">
          <FootageScene
            src="dubai/clip-3.mp4"
            badge="Набережных много"
            caption={"Bluewaters: шоу дронов + колесо обозрения\nи ещё десяток разных набережных"}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={fade()} timing={T} />
        <TransitionSeries.Sequence durationInFrames={120} name="Miracle Garden">
          <FootageScene
            src="dubai/clip-4.mp4"
            badge="С 0 лет"
            caption={"Miracle Garden —\nлёгкая прогулка среди цветов, идти недалеко"}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={T} />
        <TransitionSeries.Sequence durationInFrames={180} name="Museum of the Future">
          <FootageScene
            src="dubai/clip-5.mp4"
            badge="Достаточно зайти внутрь"
            caption={"Музей будущего у Дубай-Фрейм —\nвпечатляет уже с холла"}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={fade()} timing={T} />
        <TransitionSeries.Sequence durationInFrames={150} name="Переоценённые места">
          <TextCardScene
            emoji="⏭️"
            title="А тут можно сэкономить время"
            description="Парк динозавров и Glow Garden — на наш взгляд, переоценены"
            badge="Смело пропускайте"
            gradient="linear-gradient(160deg, #2b1055 0%, #7597de 100%)"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={slide({ direction: "from-bottom" })} timing={T} />
        <TransitionSeries.Sequence durationInFrames={180} name="Прогулка на лодке">
          <TextCardScene
            emoji="🚤"
            title="Обязательно прокатитесь на лодке"
            description="По Дубай Марине или по каналу в Шардже — детям заходит одинаково хорошо"
            badge="Марина или Шарджа"
            gradient="linear-gradient(160deg, #0f2027 0%, #2c5364 100%)"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={fade()} timing={T} />
        <TransitionSeries.Sequence durationInFrames={120} name="Семейные парки">
          <TextCardScene
            emoji="🎡"
            title="Парков развлечений — огромный выбор"
            description="Почти все хорошо адаптированы под семьи, под каждый возраст найдётся своё"
            badge="Их очень много"
            gradient="linear-gradient(160deg, #ff512f 0%, #dd2476 100%)"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={T} />
        <TransitionSeries.Sequence durationInFrames={150} name="Парк у Бурдж Халифа">
          <TextCardScene
            emoji="⛲"
            title="Парк у Бурдж-Халифа"
            description="Дубай Фаунтин и променад у самой высокой башни мира — вечером обязательно к посещению"
            badge="Смотрим фонтаны на закате"
            gradient="linear-gradient(160deg, #1a2980 0%, #26d0ce 100%)"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={fade()} timing={T} />
        <TransitionSeries.Sequence durationInFrames={200} name="Абу-Даби">
          <TextCardScene
            emoji="🕌"
            title="Абу-Даби — отдельно на 1-2 дня"
            description={"SeaWorld (с 0 лет) · мечеть шейха Зайда\nотель с видом на башни из «Форсажа» · Лувр и новый музей"}
            badge="Закладывайте отдельные дни"
            gradient="linear-gradient(160deg, #8e2de2 0%, #4a00e0 100%)"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={fade()} timing={T} />
        <TransitionSeries.Sequence durationInFrames={90} name="Outro">
          <OutroScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
      <InstagramChrome name="InstagramChrome" />
    </AbsoluteFill>
  );
};
