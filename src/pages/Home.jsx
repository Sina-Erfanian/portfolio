import { Box, Typography } from "@mui/material";
import { useRef, useEffect, useCallback, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Typed from "typed.js";
import bg02 from "../assets/bg02-min.jpeg";
import { firefly } from "../constants/particles";
import { Helmet } from "react-helmet-async";
import TextTransition, { presets } from "react-text-transition";

const Home = () => {
  const [index, setIndex] = useState(0);
  const nameEl = useRef(null);
  // const infoEl = useRef(null);

  const strings = [
    "من یک توسعه دهنده فول استک هستم",
    "من یک فریلنسر هستم",
    "من یک محتوا ساز دنیای برنامه نویسی هستم",
    "من یک علاقه مند به حوزه ی وب هستم",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["سینا عرفانیان"],
      typeSpeed: 110,
      backSpeed: 80,
      backDelay: 50,
      showCursor: false,
    });

    // const typedInfo = new Typed(infoEl.current, {
    //   strings,
    //   startDelay: 1500,
    //   typeSpeed: 80,
    //   backSpeed: 50,
    //   backDelay: 50,
    //   loop: true,
    //   showCursor: false,
    // });

    const stringsTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => {
      typedName.destroy();
      // typedInfo.destroy();
      clearInterval(stringsTransition);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg02})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Helmet>
        <title>صفحه اصلی</title>
      </Helmet>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={firefly}
      />
      <Typography variant="h4" color="tomato" ref={nameEl}></Typography>
      <TextTransition springConfig={presets.stiff}>
        <Typography variant="h5" color="whitesmoke" sx={{ mt: 2 }}>
          {/* (length of array equal 4) =>  0 % 4 = 0 so strings[0] then 1 % 4 = 1 so strings[1] then 2 % 4 = 2 so strings[2] then 3 % 4 = 3 so strings[3] then 4 % 4 = 0 so string[0]  */}
          {/* so the code we see below its mean that we want strings[0-3] and repeat it  */}
          {strings[index % strings.length]}
        </Typography>
      </TextTransition>
    </Box>
  );
};

export default Home;
