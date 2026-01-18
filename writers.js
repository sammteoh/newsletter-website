const writers = [
    {
        name: "Samuel Teoh",
        class: 26,
        job: [["2025-26", "Editor-in-Chief"], ["2024-25", "Editor-in-Chief"]],
        bio: "Samuel Teoh is a senior at Primacy. He was born in California and moved to Taiwan when he was fourteen. Samuel likes to listen to music, read books, and drink bubble tea."
    },  
    {
        name: "Hinako Tai",
        class: 27,
        job: [["2025-26", "Communications Director"]],
        format: "webp",
        bio: "Hinako Tai was born in Japan but raised in Hsinchu. She has lived there for 6 years and moved from Mie, Japan. She loves her dog and music, including drums."
    },  
    {
        name: "Miu Yoshii",
        class: 26,
        job: [["2025-26", "Editor"]],
        format: "webp",
        bio: "Miu Yoshii is a senior at Primacy who loves to dance and sing. She was born in Tokyo but grew up in Hong Kong. She enjoys sleeping, eating Shin Ramen, and drinking Comebuy tea."
    },
    {
        name: "Leo Li",
        class: 27,
        job: [["2025-26", "Editor"]],
        format: "webp",
        bio: "Leo Li was born in Los Angeles and moved to Taiwan when he was three years old. He used to be a professional athlete, but because of an injury, he changed his path. In his free time, Leo enjoys playing sports, acting, traveling, reading, studying, and eating delicious food."
    },
    {
        name: "Shota Fukumoto",
        class: 26,
        job: [["2025-26", "Editor"]],
        format: "webp",
        bio: "Shota Fukumoto was born and raised in Tokyo, Japan. He moved to Taiwan in 2021. He went to Taipei Japanese School (TJS) for a month and moved to Primacy. He enjoys playing ball sports and talking to friends."
    },
    {
        name: "Jasmine Kuan",
        class: 27,
        job: [["2025-26", "Editor"]],
        format: "webp",
        bio: "Jasmine Kuan was born and raised in Taipei, Taiwan. She enjoys listening to music, chatting with friends, and spending time with her geckos and lizards in her free time. She is always curious and loves exploring her interests."
    }, 
    {
        name: "William Chang",
        class: 27,
        job: [["2025-26", "Editor"]],
        bio: "William Chang was born in Washington, USA, and grew up in Hsinchu, Taiwan. He is currently a junior at Primacy. He loves listening to 2hollis, going out with friends, and sightseeing."
    },
    {
        name: "Stella Liao",
        class: 27,
        job: [["2025-26", "Editor"]],
        format: "webp",
        bio: "Stella Liao is a 10th grader in Primacy. She had never been to any international school before she came to Primacy. She lovess playing sports, and playing music like oboe."
    },
    {
        name: "Larissa Kuo",
        class: 26,
        job: [["2024-25", "Communications Director"]],
        bio: "Larissa Kuo was born and raised in Hsinchu, Taiwan. She moved to Taipei in 2020 for middle school and stayed there ever since. She enjoys listening to music in a quiet atmosphere and shopping in her free time."
    },
    {
        name: "Jude Chin",
        class: 25,
        job: [["2024-25", "Editor"]],
        bio: "Jude Chin is a senior and senator for Wolfpack. He is from Taiwan and transferred to primacy last year. Jude enjoys solving problems and lead events for his house and community."
    },
    {
        name: "Nicole Kuo",
        class: 26,
        job: [["2024-25", "Editor"]],
        bio: "Nicole Kuo is a junior student at Primacy. She was born in Taiwan, left to attend fourth grade in California, and came back to Taiwan when she was fifteen. In her free time, she likes to write,  do art, and go ice skating."
    },
    {
        name: "William Lee",
        class: 27,
        job: [["2024-25", "Editor"]],
        bio: "William Lee is a tenth-grade student at Primacy. He was born in South Korea, but he left at four and lived in China and Taiwan until now. He loves staying at home, listening to music, and playing soccer."
    },
    {
        name: "Rebecca Chen",
        class: 27,
        job: [["2025-26", "Editor"]],
        bio: "Rebecca Chen is a junior at Primacy. She was born and raised in Taiwan and spent a year studying in Montreal. She loves eating sushi and has a cat named Sushi."
    },
    {
        name: "Zack Chen",
        class: 26,
        job: [["2025-26", "Editor"]],
        bio: "Zack Chen is a senior at Primacy. He is a very cool guy who grew up in Taiwan. He likes listening/playing music, gaming, and spending time with loved ones."
    },
    {
        name: "Chiung Wu",
        class: 27,
        job: [["2025-26", "Editor"]],
        bio: "Chiung Wu grew up in Taipei Taiwan. His hobbies are drawing and playing sports. He really love his cat and his friends."
    },
    {
        name: "Cheryl Lee",
        class: 27,
        job: [["2025-26", "Editor"]],
        bio: "Cheryl Lee is a junior. She loves sleeping, eating, and watching funny videos. She has been scared of fish ever since her dad got some."
    },
    {
        name: "Michael Brannaka",
        class: null,
        job: [["2025-26", "Sponsor"], ["2024-25", "Sponsor"]],
        bio: "Sponsor since 2024",
        format: "JPG",
    }
]

writers.forEach(writer => {
    if (!writer.format) {
        writer.image = `writers/${writer.name.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-")}.png`;
    } else {
        writer.image = `writers/${writer.name.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-")}.${writer.format}`;
    }
})