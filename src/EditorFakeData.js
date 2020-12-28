const data = (header = "") => {
  return {
    time: Date.now(),
    blocks: [
      {
        type: "header",
        data: {
          text: header,
          level: 1,
        },
      },
      // {
      //   type: "image",
      //   data: {
      //     file: {
      //       url:
      //         "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
      //     },
      //     caption: "Roadster // tesla.com",
      //     withBorder: true,
      //     withBackground: false,
      //     stretched: false,
      //   },
      // },
      // {
      //   type: "linkTool",
      //   data: {
      //     link: "https://codex.so",
      //     meta: {
      //       title: "CodeX Team",
      //       site_name: "CodeX",
      //       description:
      //         "Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",
      //       image: {
      //         url: "https://codex.so/public/app/img/meta_img.png",
      //       },
      //     },
      //   },
      // },
    ],
  };
};

export default data;
