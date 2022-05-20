# Framer Motion Example

> Study From [The Net Ninja](https://www.youtube.com/watch?v=cRmEbR8kjHQ&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i&index=3, "youtube link")

### Basic Usage Example

```jsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, x: "100vw" }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ type: "spring", delay: 0.5 }}
>
  content
</motion.div>;
```

### Variant Usage Example

```jsx
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
};

const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};
<motion.div variants={containerVariants} initial="hidden" animate="visible">
  Parent content
  <motion.div variants={nextVariants}>Child Content</motion.div>
</motion.div>;
```

- `Parent Component` 에서 `Initial value`, `Animation value` 작성
  - `Child Component` 에서 `inherit` 한다.
  - 따로 지정 하고 싶으면 `initial` 과 `animate` 를 따로 작성 하면 됨.

### Framer Introduction

- `animate`

  - `transition` 에 정의 된 방법으로 `animate` 동작
  - `keyframes` 사용법: `Array` 형태로 값을 제공
  - ```jsx
    export const MyComponent = () => (
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      />
    );
    ```

    맨 처음 적용 되는 animation 이 없게 하려면 배열의 맨 처음을 `null`로 작성

  - ### `Orchestration`
    - `transition` 속성에 `when` 에 "beforeChildren" | "afterChildren" 으로 언제 animation 되는지 정할 수 있음
    - `delayChildren`, `staggerChildren` 으로 `children animation` 의 `timing` 을 조정 할 수 있음
  - `Dynamic Variants`

    ```jsx
    const variants = {
      visible: (i) => ({
        opacity: 1,
        transition: {
          delay: i * 0.3,
        },
      }),
      hidden: { opacity: 0 },
    };

    return items.map((item, i) => (
      <motion.li custom={i} animate="visible" variants={variants} />
    ));
    ```

    `custom` 값에 `value`를 넣어 주면 `function` 값의 `variant`가 `custom value `를 `resolve` 한다

- `gestures`
- `variants`

- `initial`
  - `Server-side Rendering` 을 하여, `initial` 값을 클라이언트에서 렌더링 되기전에 `Style`에 적용 시킨다.
  - `initial={false}` 이면, `animate` 되지 않고, `animate` 값을 서버사이드 렌더링 과정에서 적용 시킨다.
