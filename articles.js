let articles = []
/*
articles = [
    {
        title: "How Do We Find The Truth?",
        author: "Leo Li",
        feature: "Esther Krushnisky",
        date: "October 1, 2025",
        issue: 18,
        category: "Feature",
        subcategory: ["Teacher"],
        type: "Cover",
        content: `
                <p>New to Primacy but already making an impact, Ms. K. (Esther Krushnisky) brings energy, experience, and a love for teaching English. Let us sit down to learn more about her story and what inspires her. She previously worked at Studio Classroom, co-hosted Let’s Talk in English, and has taught students, police officers, and government officials. She earned degrees from the University of British Columbia and a master’s from the University of Tsukuba. Ms. K. says she is an introvert but tries to be more outgoing at school.<p>
                <p><strong>Leo:</strong> What is your favorite sport?</p>
                <p>Ms. K: When I was growing up, I attended Morrison Academy Taipei. Since it was a small school, we were given opportunities to play all the team sports offered: basketball, soccer, volleyball and softball. I also joined the track and field team in addition to playing team sports in grade 9 when I attended Morrison Academy Taichung. When I moved to Canada to finish high school, I continued playing basketball, volleyball and soccer on the school teams.</p>
                <p>However, as I get older, I have shifted to weight training. I love the sound of weights and use working out as "me time," a time I focus on myself. I listen to podcasts or catch up on K-dramas when I work out. Whenever I am at the gym, I think of my dad, who I love and miss dearly. He used to be a professional weightlifter, won weightlifting competitions and even started a gym with his brother in his early twenties. Remember, we are talking about sixty years ago, when working out wasn’t a thing.</p>
                <p>My dad always told us to work out and be strong. “Don’t be a chocolate soldier,” he would warn. A chocolate soldier melts in the heat, which is a metaphor for a person who gives up easily because they are weak in their faith, mind or body. I work out because I want to be independent and travel the world, carry heavy groceries and chase after my future grandkids or great-grandkids when I am in my 80s and 90s. I don’t want to be frail and weak, I want to be healthy and strong!</p>
                
                <p><strong>Leo:</strong> What is the meaning of life?</p>
                <p>Ms. K: Life is a gift from God and our parents. I believe even before we were born, God already had a plan and purpose for us. As it says in the Bible in Jeremiah 1:5, "Before I formed you in the womb, I knew you, before you were born I set you apart…" I believe we find meaning in life by being connected to our Creator, the God who made us and loves us. He gives each person gifts and abilities, and He wants us to use those gifts and abilities to bless and help others. God also wants us to be joyful, balanced and healthy. When we develop and use our gifts and abilities to bless and help others and live joyful, balanced and healthy lives, we find meaning and have purpose in life.</p>
                
                <p><strong>Leo:</strong> What quote will you share with all the students</p>
                <p>Ms. K: A quote I treasure is a verse from my favorite book, the Bible. I don’t have too much time to read now, but I do try to read the Bible every day. The verse is from John 8:32, "Then you will know the truth, and the truth will set you free." I especially like the last clause, “the truth will set you free.” Freedom and truth are important values to me. Don't just believe what someone tells you to believe; find out for yourself if it is the truth.</p>
                <p>In this context, Jesus told the Jews who believed He was the savior to abide, or hold on and obey His teachings. He reminded them that when they did that, they would truly become His disciples, or followers.</p>
                <p>When we follow Jesus, He will show us what is true and what is false. In our world of fake news, instant food, and shifting public opinions, we need to know what the truth is about morals, values and our identity. How do we know the truth?</p>
                <p>By knowing God, studying His world and applying God’s principles in our lives. Jesus said, “I am the Way, the Truth, and the Life” (John 14:6). When you know Jesus, you will find the way in life, know the truth, and discover your purpose and meaning in life. Feel free to come talk to me if you are interested in finding the Truth!</p>
            `
    },
    {
        title: "Why I Left England",
        author: "William Chang",
        feature: "Elizabeth Farrow",
        date: "October 1, 2025",
        issue: 18,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
                <p>When I first went to study in England, I thought it would be an amazing experience. Everyone always talks about how the UK has one of the best education systems in the world and provides some of the safest school environments. What I found was far from my expectations. The academics were, as expected, but the environment outside the classroom often felt immensely toxic. People’s conflicts didn’t just stay as arguments with words; they usually escalated into physical fights. I saw students get jumped, beaten up, or even humiliated by having things poured over them by other students.</p>
                <p>Gossip was dangerous because it could easily escalate into physical violence, such as beatings or even stabbings. I’ve personally heard of stabbings and threats of stabbings between even friends. They mention it like it wasn’t anything out of order. Another thing that shocked me was how normal substance use was. Many vaped in bathrooms and smoked weed in them. Socially, I also felt the difference. Many students hadn’t traveled much, apart from short trips to Spain, so they weren’t very open-minded.</p>
                <p>Most Asian students were the targets of bullying as they were usually the minority within the school. I was lucky not to have to experience it, but people still constantly asked why I was even in England in an excluding way.</p>
                <p>I left England in the end because the violence around me was overwhelming, and I wanted a safer place. Surprisingly, I felt more at home in Taiwan, even though I had first left there to move to England. In Taiwan, I was surrounded by a culture that reflected my own, instead of being one of the only Asians in the community. That experience showed me how much your environment shapes belonging and identity, and it helped me adapt to new situations by choosing safety and well-being over staying somewhere I felt unsafe.</p>
                <p>Moving to England at the time may have felt like the right choice, but after nine months, I realized how out of place I was. I was one of the few Asians in my entire school, and even though I was mixed, I still didn’t feel like I belonged. As difficult as it was, the experience taught me what it means to build a sense of place wherever you are.</p>
            `
    },
    {
        title: "Growing Through Primacy",
        author: "Stella Liao",
        feature: "Alisa Lee",
        date: "October 1, 2025",
        issue: 18,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
                <p>My life has gone through many ups and downs since I finished middle school in May. Everything was complicated for me back then. But when I started school at Primacy, it was a huge change for me. My initial impression was a very positive one, with a friendly environment, clean facilities like the well-maintained bathrooms, and a high standard of English compared to my previous school.</p>
                <p>The teachers are very supportive, which made me feel welcome and encouraged to do my best. Despite these positive first impressions, I still faced some challenges. The homework and projects required for each class are more demanding than what I was used to in middle school, and adjusting to the new school culture took some time.</p>
                <p>I had to learn new ways to manage my time and stay on top of my assignments, while getting used to a different academic and social environment. To overcome these challenges, I worked hard on my studies, adapted to the new routines, and sought guidance from others around me.</p>
                <p>I also received advice and support from my brother, which made the transition much smoother. Slowly, I began to feel more comfortable and confident in my new environment. Looking forward, I hope to continue improving myself at Primacy.</p>
                <p>I want to strengthen my English skills, including writing, speaking, and academic vocabulary, so I can prepare for college and future opportunities. I also hope to grow personally, becoming more independent, disciplined, and confident in both my academic and social life.</p>
            `
    },
    {
        title: "Teacher's Day",
        author: "Hinako Tai",
        feature: null,
        date: "October 1, 2025",
        issue: 18,
        category: "School Updates",
        subcategory: ["Teacher's Day", "SA Event", "Holiday", "Shark Week"],
        type: null,
        content: `
                <p>On September 24, while we enjoyed the Shark Week theme, “Teacher-Students Day”, our school had another special event: Teacher’s Day. This day was designed for several purposes: to recognize the important contributions of teachers in shaping students, highlight the value of our teachers, and show appreciation for their hard work and guidance.</p>
                <p>In addition, SA prepared ten award categories, and the teacher with the most student votes for that category will get a prize – a mug with a picture of the category printed on it. All categories had three nominees with a close number of votes, and the Senators from each House announced the winners. Now, let’s see the results!</p>
                <p>The Most Patient Teacher Award: Mr. Mark Harper</p>
                <p>Teacher with the Best Handwriting Award: Dr. Ashim Pheirim</p>
                <p>The Most Energetic Teacher Award: Mr. Ayomi Pheirim</p>
                <p>Most Likely to be TikTok Famous Award: Mr. Da Hsu</p>
                <p>Best Dressed Teacher Award: Mrs. Esther Krushnisky</p>
                <p>Best Storyteller Award: Mr. Ayomi Pheirim</p>
                <p>The Funniest Teacher Award: Mr. Ayomi Pheirim</p>
                <p>The Kindest Teacher Award: Mrs. Esther Krushnisky</p>
                <p>The Most Supportive Teacher Award: Mr. Mark Harper</p>
                <p>Teacher of the Month: Mr. Ayomi Pheirim</p>
                <p>These results were completely unpredictable for Primacy. According to an interview with Mr. Ayomi Pheirim by our President, Ayu Ogura, and our Social Vice President, Larissa Kuo, the reason he was able to accomplish winning an astonishing four of the ten awards was because “All of our students’ smiles and laughter motivate him every day to do more and more.” Moreover, at the end of the event, students took photos with teachers who they were imitating.</p>
                <p>Although many teachers’ names were not listed about, we indeed appreciate every single teacher and faculty at Primacy for their kind and enthusiastic support to make the students’ path and future brighter and more successful. We cannot imagine how much hard work they put in every day, even when they are not feeling well. In conclusion, I would like to say again to all the teachers and faculty – thank you.</p>
            `
    },
    {
        title: "Shark Week",
        author: "Jasmine Kuan",
        feature: null,
        date: "October 1, 2025",
        issue: 18,
        category: "School Updates",
        subcategory: ["Shark Week", "SA Event"],
        type: null,
        content: `
                <p>Shark Week for the fall semester 2025 began on Monday with Jersey and Jeans Day. Students came to school dressed in jerseys of professional sports teams. The hallways looked like a mash-up of different sports arenas, with basketball, soccer, and other jerseys on display. It was a strong start to a week full of school spirit and creativity.</p>
                <p>Tuesday brought Dynamic Duo Day, and the school was full of creative pairings. Some students took the theme in interesting directions, like William Lee and Shota Fukumoto, who dressed as an Easy Card and a bus. Others went the classic route, such as Cinderella and her prince.</p>
                <p>My partner, Cheryl Lee, and I dressed up as Duffy and ShellieMay from Disney. The variety of costumes made the day lively and entertaining, showing how imaginative every could be.</p>
                <p>Wednesday was Teacher-Student Day, dedicated to celebrating Teacher’s Day (which would be the following Monday!). Many students showed up dressed exactly like a teacher, copying outfits and small details. There was a large group of students who became Mr. Harper for the day, complete with shirts, khaki pants, and Crocs. Notably, Leo Li dressed up like Dr. Pheirim so perfectly! The day was full of laughter and surprise, making it really interesting.</p>
                <p>On the last day before SA Day, Thursday came around as Oversized Day. Most students dressed in oversized everything – hoodies, T-shirts, pants. The overall vibe that day was casual and relaxed, but also full of energy as students prepared themselves for the House Chant on SA Day in less than 24 hours!</p>
            `
    },
    {
        title: "SA Day",
        author: "Samuel Teoh",
        feature: null,
        date: "October 1, 2025",
        issue: 18,
        category: "School Updates",
        subcategory: ["SA Day", "SA Event", "Shark Week", "Field Trip"],
        type: null,
        content: `
                <p>On Friday, the last day of Shark Week, Primacy students rose early to arrive at Yuanshan Station at 8am in the morning to start what many were looking forward to – SA Day! As students gathered into their respective Houses, they were given time to practice House chants. Despite on-and-off rain throughout, all Houses gave their all.</p>
                <p>Gator Nation rose with pom-poms and creative beats. Wolfpack called out each House one by one with fast-paced lyrics and interesting movements. Blue Tang changed the direction by adopting a rugby pregame-inspired chant, with face paint and powerful shouting (Shota, in particular). Swarm buzzed onto the stage and performed a synchronized chant that mirrored last year’s lyrics while transforming the beat.</p>
                <p>Then, a series of picture challenges arose. First, House began a scavenger hunt to find non-living objects that started with the letters in ‘Primacy’. Everyone had fun looking for pigeons, cars, and airplanes, then rushing to submit the photos by the deadline. Then, the second photo challenge was announced. Senators were given a series of group photos for the House members to reenact. From lying on the floor to synchronized jumping to human pyramids, students tried their best to fulfill all the tasks before a certain time.</p>
                <p>Because the Mid-Autumn Festival was arriving soon, the video-making for the traditional Chinese story ‘Hou-Yi Shoots the Sun’ had everyone in a buzz as they found their costumes and began filming their scenes.</p>
                <p>After video-making, students gathered into the lunch groups they’d created themselves with their assigned sponsors and made their way to the lunch area. One healthy lunch and dozens of conversations later, what many were looking forward to for the entire morning arrived: Laser Tag!</p>
                <p>Equipped with a gun and a vest, Primacy split into Houses and dove into a dark maze for a warm-up game and three separate game modes that pitted House against House. From fighting for points in the maze to strategizing game plans during the downtime, various students arose for their House, many to the surprise of their House members.</p>
                <p>In the end, with overwhelming success, Wolfpack claimed first place, with Blue Tang, Swarm, and Gator Nation following in the consecutive places. All in all, SA Day was an entertaining day full of laughter and fun. A huge thank you to the SA officers for planning and organizing all of these events!</p>
            `
    },
    {
        title: "Preparing for Maxball and Basketball",
        author: "Shota Fukumoto",
        feature: null,
        date: "October 1, 2025",
        issue: 18,
        category: "Intramurals",
        subcategory: null,
        type: null,
        content: `
                <p>The second intramurals competition began last Friday, September 19: boys' basketball and girls' maxball. Although winning or losing the games did not matter in terms of House points, students still played their best to beat their opponents.</p>
                <p>As always, the first week of the season was spent practicing for competition to make sure that every student was familiar with the rules. In order for every girl to know the maxball rules, Mr. Ayomi made all the Senators give every girl a chance to play.</p>
                <p>Maxball has some complicated rules. According to Mr. Ayomi, he made a practice day for maxball, not for basketball practice, because every boy knows the rules for basketball. Phoebe Lee, SA Chaplain from Swarm, said she roughly understands the rules of maxball, but she tends to forget about the goalie zone.</p>
                <p>She often steps into the zone, which ends in either a change of possession or conceding a penalty shot. “Maxball rules are simple, and playing maxball is fun. However, it’s tiring to play maxball and then run for the Distance Challenge without resting.” Phoebe said apologetically. “But it’s my pleasure to win games and earn House points,” she added.</p>
                <p>While girls play maxball, guys engage in basketball. Students at Primacy, in general, and boys in particular, have a strong enthusiasm for basketball. Indeed, one-fifth of all boys at Primacy are in the Primacy basketball club. Students’ immense passion and excitement for basketball are notable. The upcoming Intramurals basketball tournament will be one of the most remarkable competitions this year.</p>
                <p>While students played sports on the second floor, the House Distance Challenge continued as usual on the third. Despite Houses being allowed to sign up more than four people for the entire hour, three of the four Houses were unable to fill up all four spots due to a number of girls who were obligated to play maxball.</p>
                <p>In terms of total distance, Samuel Teoh still ranks number one, with Mr. Brannaka and Chiung Wu closely following in second and third place. The Distance Challenge is dominated by Swarm, but it is still only the middle of the semester, which leaves time for other Houses to catch up!</p>
            `
    },
    {
        title: "Spiritual Thought",
        author: "Miu Yoshii",
        feature: null,
        date: "October 1, 2025",
        issue: 18,
        category: "Spiritual Thought",
        subcategory: ["Bible"],
        type: null,
        content: `
                <p>Today’s Bible verse:</p>
                <p>“Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.” - 1 Corinthians 13:4-5</p>
                <p>When you think about love, what do you think of? This verse shows that love does not demand to have things in its own way, it's not irritable or hateful. Love is patient and kind. This isn’t just advice for how we should treat others but a picture of God Himself. God is patient with us, kind in His care, loving in sending His Son, and forgiving even when we sin. His love is not self-seeking but self-giving, and because of that, we can live with peace and hope. From this verse, let us remember that when we choose patience over anger, kindness over showing off, and forgiveness over hard feelings, we are reflecting the heart of God.</p>
                <p>Prayer:</p>
                <p>Dear Heavenly Father,</p>
                <p>Thank you for showing us what love looks like. You are patient with us, kind in Your care, and forgiving even when we make mistakes. Help us show your love in our everyday lives. Let us choose to be patient and not angry, to be kind and not proud, and to forgive instead of keeping hurt inside.</p>
                <p>In Jesus’ name, Amen</p>

            `
    },
    {
        title: "Life With My Sister's Strange and Memorable Habits",
        author: "Shota Fukumoto",
        feature: "Moroni Chen",
        date: "September 15, 2025",
        issue: 17,
        category: "Feature",
        subcategory: ["Student"],
        type: "Cover",
        content: `
                <p>Life with my sister is full of unforgettable stories, some sad and some hilarious.</p>
                <p>Two of the most memorable involve her hamsters and my cat, Sushi. Both stories show just how unpredictable life in our family can be when my sister is involved.</p>
                <p>The hamster story is one we’ll never forget. She had a father hamster and a group of babies, and they were all living together when she rushed off to school one day and forgot to feed them.</p>
                <p>When we got home, the cage was nearly empty—only one little hamster was still alive. It was traumatized and bloody, and it taught her a hard lesson about what happens when pets aren’t properly cared for.</p>
                <p>The second story is way weirder and funnier. My cat, Sushi, often becomes part of my sister’s strange habits. For some reason, she likes to put Sushi’s head in her mouth as if she’s pretending to eat her.</p>
                <p>Sushi usually just tolerates it, looking confused, while the rest of us laugh. After she’s done, Sushi just never gets close to her mouth again for at least a week because the smell doesn’t dissipate easily. It’s silly, but it’s now one of those things everyone in my family expects from her.</p>
                <p>These two stories—one about a tragedy with her hamsters and one about her funny way of treating my cat—sum up what it’s like living with my sister.</p>
                <p>Even though she might be a little unique sometimes, she still makes it up with some questionable and funny events. With Rebecca around, life is never uneventful.</p>
            `
    },
    {
        title: "New Club: Model UN",
        author: "Leo Li",
        feature: null,
        date: "September 15, 2025",
        issue: 17,
        category: "School Updates",
        subcategory: ["Club", "MUN", "Academics"],
        type: null,
        content: `
                <p>This school year, we have a brand new club: Model United Nations (MUN). Club members are not only learning how to debate, but also solving problems, practicing leadership skills, and learning the meanings of unmoderated and moderated caucuses. Most people know that I’m a little too talkative, and that was one of the reasons why I joined the MUN Club.</p>
                <p>I realized that I often argue with other students, and the result of the arguments is usually messy. This is something I need to work on – how to speak like a lawyer, lead like a diplomat, and solve problems more effectively.</p>
                <p>What do we do during club time?</p>
                <p>I remember the first meeting – we learned what MUN is and how to have a good debate. One highlight from the first club meeting was a debate about curry: Should curry be mixed or separated from rice?</p>
                <p>Club members argued using culture, taste, and even eating habits as grounds for argument. It was surprisingly fun!</p>
                <p>In our third club meeting, our debate topic was: “Should guys pay for everything on the first date, or should it be split (AA)?” Everyone was extremely interested.</p>
                <p>Dino quickly chose the ‘split’ side, which didn’t surprise anyone. I was the first to speak for the ‘guys pay’ side. I argued, “If you ask a girl out, you should pay for her. This can create good vibes and make you seem more gentle and attractive.”</p>
                <p>Then, a deep voice came in – it was Mr. B. He said, “A relationship is not based on money; it’s based on personality. Money is not the way to attract someone – your character is what matters most.”</p>
                <p>Hearing different opinions from different age groups showed us that there’s no single correct answer. That’s what makes debating fun.</p>
                <p>Personally, I think MUN is a very unique club. We discuss the same topics, but everyone has a different opinion and a different way of thinking. Sometimes, listening to other people’s opinions teaches you things you’ll never find in a textbook.</p>
            `
    },
    {
        title: "Switzerland",
        author: "Miu Yoshii",
        feature: "Connie Huang",
        date: "September 15, 2025",
        issue: 17,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        format: "webp",
        content: `
                <p>Leaving home to spend a year in a completely different country was one of the scariest things I’ve ever done. When I first arrived in Switzerland as an exchange student, everything felt new and overwhelming — the language, the culture, even the way people interacted.</p>
                <p>I still remember my first days in Zurich, when I barely understood any German. At school, I felt a bit lost at first, sitting silently in class and trying to keep up. But little by little, things started to change. I began to catch words, and slowly, I could join conversations and laugh along with my classmates.</p>
                <p>Switzerland has offered me experiences I never imagined. I’ve visited beautiful cities like Bern and Lucerne, celebrated Easter and festivals with my host family, and even gone on spontaneous adventures, like a weekend trip to Zermatt with other exchange students. I’ve also had the chance to explore Switzerland’s culture — from traditional festivals like Sechseläuten to modern events like concerts in Milan.</p>
                <p>Of course, there were moments when I missed home — my friends, my family, and the familiar comforts of Taiwan. But instead of letting fear hold me back, I’ve learned to face challenges head-on.</p>
                <p>This year abroad has taught me how to be independent and open-minded. I’ve built friendships from around the world, shared my culture proudly, and grown more confident in myself.</p>
                <p>Even though my exchange year is over, I know that Switzerland will always be a part of who I am.</p>
            `
    },
    {
        title: "Welcome Back",
        author: "Hinako Tai",
        feature: null,
        date: "September 15, 2025",
        issue: 17,
        category: "School Updates",
        subcategory: ["Welcome Back Party", "SA Event"],
        type: null,
        content: `
                <p>On August 6th, 2025, the Student Association started off the Primacy journey with a “Survival” mode–-the theme of the Welcome Back Party. The school was transformed with jungle-inspired decorations, including a lush elevator ride to the 6th floor, where adventure-related stickers and activities awaited.</p>
                <p>Students took on five exciting challenges against each house: Shark in the Ocean, Crocodile Crossing, Buzzing Downshow, Obstacle Race, and Pictionary. Each game was introduced with a fun video and “survival tips”. The most popular was “Shark in the Ocean,” where students formed changing-sized groups to escape a “shark” while chanting, “Shark in the Ocean, Swim Swim Swim!” Those caught had to introduce themselves on stage with their grade, House, and a fun fact. There were a lot of Primacy members, including new students, who introduced themselves, giving us an opportunity to know about each other more deeply.</p>
                <p>The second game, “Crocodile Crossing,” featured a floor covered in colored tape squares. When a color was called, players had to quickly step into a matching square. The twist? Each round allowed a different number of people per square, making it harder to avoid getting “caught by the crocodile.” Although this is not a sports-advantaged activity, several Primacy sports players, especially in basketball, survived.</p>
                <p>Also, our third game, “Buzzing Downshow,” was a thrilling face-off between two Houses racing toward each other. When players met, they played rock-paper-scissors to determine who could continue. The goal was to reach and sit on the opponent’s chair; whoever did that first claimed victory for their team. During this survival, we discovered the fact that our school has some “lucky girls and boys”, who got to the goal without losing a single game.</p>
                <p>Next, the fourth activity, “Obstacle Race,” in which all four houses competed against each other in a series of balance-based challenges: cup pyramid, ping-pong balance, and ping-pong basketball. In each round, dropping a cup or ball meant starting over; the highlight was the ping-pong basketball, where one teammate held a cup while the other aimed and shot ping-pong balls into it--a test of teamwork and precision.</p>
                <p>Lastly, the final game, “Pictionary,” brought plenty of laughs as each house lined up facing forward. The first person drew a picture based on a given word, then passed it down the line; each player copying what they saw without knowing the original word. By the end of the game, we found that there were some very artistic and creative Sharks.</p>
                <p>To wrap up the party, we premiered an original music video for the song “Sapphire,” featuring clips of the Sharks enjoying their playful summer vacation – eating ice cream, riding helicopters, hanging out with friends, and more. Through these moments, it was obvious that the Sharks had strengthened their bonds, marking a strong and spirited beginning to their adventure at The Primacy Collegiate Academy.</p>
            `
    },
    {
        title: "Develop Wisdom Day",
        author: "Samuel Teoh",
        feature: null,
        date: "September 15, 2025",
        issue: 17,
        category: "School Updates",
        subcategory: ["Develop Wisdom Day", "Pillar Day", "Field Trip"],
        type: null,
        content: `
                <p>On September 12, Develop Wisdom Day, Primacy students made their way up to the sixth floor for their second College Fair of the school year! Dozens of schools, such as Ohio State University, Penn State, and Colby College, were in attendance. Students made their way around the tables, asking questions about dorms and majors to learn valuable information about college life and the application process.</p>
                <p>After the College Fair, the real Develop Wisdom Day began! Mr. Van and Ms. K both introduced the theme of the pillar day: the Taiwanese indigenous people. The program opened with ‘Mali Mali Ti Yesu-sama’ (Thank You Jesus) by the Shark Band. Students interlocked hands in formation and swung from side to side as Phoebe Lee and Zack Chen sang. Then, students listened as Mr. Van interviewed Ms. Nina on her heritage and the customs of the Paiwan tribe.</p>
                <p>After listening to the interview, students split into groups to research different Taiwanese aboriginal tribes and create presentations on their research. Students filled out worksheets as they learned about different tribes and their cultures. Then, after a short break, Primacy made its way outside on its first field trip to Shung Ye Museum of Formosan Aborigines. Split into groups, students toured around the museum and learned about the different aboriginal tribes with some familiarity through their morning research! As Develop Wisdom Day came to a close, we find that what was most important was not what the Amis people wore and ate, but that we learned their culture together.</p>
            `
    },
    {
        title: "Spiritual Thought",
        author: "Samuel Teoh",
        feature: null,
        date: "September 15, 2025",
        issue: 17,
        category: "Spiritual Thought",
        subcategory: ["Bible"],
        type: null,
        content: `
                <p>Today’s Bible verse:</p>
                <p>“Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to Him, and He will make your paths straight.” Proverbs 3:5-6</p>
                <p>As we begin the 2025-26 school year, we will often find ourselves worrying about our grades, our relationships, and the future. From today’s verse in Proverbs, we understand that only by submitting to God and acknowledging that His will is greater than our will can we truly find peace. Sometimes, we get caught up in our own lives, trying to solve problems that are outside of our control. Instead, we should take a step back and allow God to take control of our lives, knowing that He knows what’s best for us and all we need to do is trust in Him.</p>
                <p>Prayer:</p>
                <p>Dear God,</p>
                <p>Thank you for showing us through Proverbs that the only way to true freedom and joy is to submit our lives to you. Please remind us daily that worrying about challenges and problems outside our control is pointless, and that we should always turn to you and your guidance. As we begin our school year, please be with each of us in our highs and lows so that we may see your power working in our lives.</p>
                <p>In Jesus’ Name, Amen.</p>
            `
    },
    {
        title: "Fencing",
        author: "William Chang",
        feature: "Happy Duan",
        date: "September 15, 2025",
        issue: 17,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
                <p>One of the most important lessons I have learned is to believe in myself and have confidence. At first, it was difficult to trust my abilities, but fencing has taught me that progress comes with patience and effort. Hard work may take time, but it always pays off.</p>
                <p>When I transferred to a new school, I felt a lot of pressure because no one believed in me. Instead of giving up, I used that pressure as motivation. Through dedication and focus, I was able to prove myself and grow stronger.</p>
                <p>Recently, I competed in a fencing tournament in Malaysia and placed third. While my goal was first place, I see this result as a starting point for my high school career. My coach and I both believe I still need more experience and training, but I have confidence that I can reach higher goals in the future.</p>
                <p>Fencing is more than just a sport for me. Training brings me joy, builds my confidence, and teaches me valuable lessons about discipline and perseverance. I am grateful to Primacy for giving me the chance to compete in tournaments, and I will continue to work hard to improve and represent my school with pride.</p>
            `
    },
    {
        title: "Starting the School Year with Table Tennis",
        author: "Samuel Teoh",
        feature: null,
        date: "September 15, 2025",
        issue: 17,
        category: "Intramurals",
        subcategory: ["Ping Pong", "Table Tennis", "Distance Challenge", "Sports"],
        type: null,
        content: `
                <p>The first Intramurals competition of the school year began with a Ping-Pong season. Spanning across four weeks, the games were split between boys' doubles, girls' doubles, and mixed doubles.</p>
                <p>The first week was spent practicing for the competition, making sure that the duos from each House were synchronized and familiar with each other.</p>
                <p>In the second week, with boys’ doubles, Swarm began the weekend with no losses, with Brandon Chen, Moroni Chen, and Mr. Ayomi leading the House to victory.</p>
                <p>However, in the second week with girls’ doubles, no House escaped Friday unscathed. Every House won two games and lost one game, except for Gator Nation. In the third week, with mixed doubles, Jolie Lin and Filippe Chieh took home a three-win streak.</p>
                <p>Wolfpack had no losses, winning 90 points for their House and pushing their House placement to second place (tied with Blue Tang)!</p>
                <p>In the meantime, on the third floor, students were racing away in the House Distance Challenge. Due to the sheer number of students running an hour, a new rule was put in place that there could only be four students running an hour from each House. This way, Houses strategized by putting their strongest runners in the Distance Challenge as well as placing their best students to compete in sports games. In terms of total distance, Samuel Teoh and Chiung Wu rank first and second from Swarm. Mr. Brannaka, Mr. Van, and Leo lead their Houses in distance, showing that age doesn’t matter in the Distance Challenge!</p>
            `
    },
    {
        title: "Reflection",
        author: "Samuel Teoh",
        feature: "Samuel Teoh",
        date: "May 29, 2025",
        issue: 16,
        category: "Feature",
        subcategory: ["Student"],
        type: null,
        content: `
                <p>Dating advice of the year? “Always cherish the moments you have with your loved ones because you never know what will happen next.”</p>
                <p>This was the dating advice that Lilian gave in the very first issue of The Primacy Times, setting the tone for many issues to come. I’ve realized this school year that this advice not only applies to the people I love and the relationships I have with others, but to every aspect of my life at Primacy.</p>
                <p>I still remember meeting Zack for the first time when I stepped into school as a transfer student – no longer just someone visiting to take the PSAT.</p>
                <p>Sitting down next to me on the sofa, he bought me McDonald's and asked me where I was from. Chihoko taught me that even new students could join the Student Association, giving me a far-fetched dream that quickly became an obsession.</p>
                <p>Getting lunch with Leo became a daily occurrence, and talking to him while walking to 7-11 has taught me more about how to get a girl to like you (tap her shoulder ten times) than anything else has.</p>
                <p>Every day, I sit in Mr. Ayomi’s class as he cracks jokes about Dino ordering lunch for the entire school or Zack’s deep interest in marriage, and it always makes me smile.</p>
                <p>As I say goodbye to this school year, I realize that it was not the big events and achievements, such as the Banquet and Graduation, that made my school year special.</p>
                <p>It was the small, seemingly meaningless moments – walking home together, watching the cats on the sidewalk, getting dinner together after Intramurals, and taking pictures on Shota’s iPad during World History.</p>
                <p>Through my NHS community service project, I learned how to bake cookies that aren’t burned. Through Zumba lessons with Mrs. Jathrena, I learned how to dance ‘Bora Bora’ and ‘Bye Bye Bye’.</p>
                <p>But, perhaps most importantly, I learned how quickly time passes and how I should cherish those around me and the time I have with them.</p>
                <p>Although graduation is a time to reflect on the school year and the memories I’ve made, it is also important to remember to look forward to the future instead of lying in the past. Graduating means leaving the old memories and mistakes behind, and instead creating a new future full of hope and dreams.</p>
                <p>Looking forward, I hope to create new memories with my friends, meet new people, and remind myself that life isn’t defined by my material achievements, but by the people I share it with.</p>
            `
    },
    {
        title: "Obsession with Football",
        author: "William Lee",
        feature: "William Lee",
        date: "May 29, 2025",
        issue: 16,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
                <p>It hasn’t been long since I discovered the sport of football. Before that, I was never the sports type. I didn’t grow up watching games, playing in teams, or even being interested in physical activities.</p>
                <p>To be honest, I thought sports just wasn’t for me. I believed I was weak, had poor stamina, and I often avoided anything that involved running or competing.</p>
                <p>I enjoyed playing with friends, but not if it involved sports. Things started to shift when I entered middle school. During recess and PE class, my friends would often play basketball or football.</p>
                <p>I wanted to join them, but each time I tried, I would either get hurt or mess up. I felt like nobody wanted me on their team. I began to feel left out and discouraged. I made small mistakes, and somehow, those moments made me feel like I didn’t belong.</p>
                <p>My confidence sank and I started withdrawing. Not just from sports, but even from talking to people. I had no any inspiration, just hoping that this time will go away.</p>
                <p>Then there was a turning point.</p>
                <p>One day in 2022, I got to watch a game from the Premier League by chance. That was the first time I saw an actual game, one of our well-known players, Heung-Min Son. It was the season he won the Golden Boot.</p>
                <p>The way he performed and the teamwork of the other players were about passion, teamwork, and heart. I was completely drawn in.</p>
                <p>Soon after, the 2022 Qatar World Cup aired, and that changed everything. The drama, the comebacks, the tears; it was like a rollercoaster of emotions... that I would never forget.</p>
                <p>That tournament made me fall deeply in love with football. I wasn’t just a viewer anymore. I became a real fan. Inspired by the matches, I actually started playing. I wasn’t good at ball. But little by little, I got better. And I began to enjoy it. It gave me something I didn’t know I needed: hope, and a inspiration.</p>
                <p>After arriving at Primacy, I was excited to discover that there was soccer club. I loved heading out to the pitch, running drills, and playing games. Those moments remains some of my favorites, especially hearing Shota shout at me to run.. or to get the ball. I’ll never forget the time spent with Tohna, Loahan, Zack, Isaiah, Leo, Bolin, Seth, and all the other members I have today. I’m especially thankful to Mr. Brannaka and Mr. Ayomi for making the club possible and for the games we played together.</p>
                <p>All of these experiences, gave me confidence, joy, and a sense of belonging. Looking back, football didn’t just become a hobby. It became a thing that was with me during the tough days growing up.</p>
                <p>When I felt like I didn’t fit in, when I doubted myself, football was there. It helped me believe in myself again. It reminded me that even if I start out weak, I can still grow strong.</p>
            `
    },
    {
        title: "A Last Prayer",
        author: "Nicole Kuo",
        feature: null,
        date: "May 29, 2025",
        issue: 16,
        category: "Spiritual Thought",
        subcategory: ["Spiritual", "Bible"],
        type: null,
        image: null,
        content: `
                <p>With every step we’ve taken up the Primacy stairs, hope is conveyed and strength is given unto us, perhaps through a meaning not many can realize. Hardships are overcome, and relationships are strengthened as we finish the last crumbs of food during lunch.</p>
                <p>In the afternoon, we always laugh at the one person who falls asleep in class, as our blood pumps sugar. Waiting for the bell to ring for service learning while scrolling on Little Red Note, Instagram, and TikTok has always been a rush because our brain needs these relaxants at the end of the day.</p>
                <p>We always dislike Service Learning as a result. Nobody likes getting interrupted when watching an adorable cat video, but Service Learning builds up our resilience and serves as a reminder of humiliation when someone else notices you forgot to clean a spot or erase the whiteboards.</p>
                <p>When the last bell rings and we get dismissed, we don’t just get to yell at Mr. Shen for revenge. There’s more to it, like a foundation built on rocks and a family to turn to. We can love God with all our hearts in the last prayer. At last, school is over. Amen.</p>
            `
    },
    {
        title: "12,000 KM from Home",
        author: "Michael Brannaka",
        feature: "Michael Brannaka",
        date: "May 29, 2025",
        issue: 16,
        category: "Feature",
        subcategory: ["Teacher"],
        type: "Secondary",
        format: "JPG",
        content: `
                <p>The year was 2010 and I had graduated from college a year ago. I took a “gap year” and served as a volunteer teacher in the Marshall Islands. The laid-back lifestyle took some getting used to, but I was very close to the people by the end of my 10 months on the tiny island.</p>
                <p>The travel bug had bitten and I lined up teaching work in South Korea and skipped the 12,000 km across the globe to my next exciting destination.</p>
                <p>Coming from island life, where events started 45 minutes to 2 hours late, to fast-paced South Korean “bali-bali” culture was a major adjustment to make and I struggled with culture shock.</p>
                <p>However, I was determined to make friends and enjoy new experiences as much as possible. At first, I felt really welcome, and the other teachers at my school were very friendly and supportive. Soon, I noticed that the other foreign teachers kept to themselves and spent most of their time in their apartments watching TV.</p>
                <p>One night, I heard that the Korean teachers were playing volleyball, so I went and joined. I could play volleyball, and I was keen to play more with them.</p>
                <p>However, they never invited me back, and I noticed that they would avoid sitting with foreign teachers at lunch or important school dinners whenever possible.</p>
                <p>Most likely, they didn’t want to feel obligated to speak English, so they were avoiding the situation, rather than us. But it became clear to me why the foreign teachers kept to themselves. Another issue I had was that I couldn’t have a cell phone because I didn’t have my Alien Residence Card yet. A couple of months in, I hit a low. </p>
                <p>I felt lonely and isolated, and was struggling to make connections. I was determined to push through, so I went online and met foreigners who were into rock climbing, one of my favorite sports at the time.</p>
                <p>I went rock climbing with them over one of the breaks, and one of them was leaving. He sold me his motorcycle, and I began traveling around the country.</p>
                <p>I made friends in the city and finally got a cell phone, which made it easier to meet up with people. Things improved rapidly, and I really enjoyed my time in South Korea and still keep in touch with many of the friends I made there.</p>
                <p>You’re going to hit lows in life. You’re going to feel lonely and isolated. It will pass. Push through the hard times and go out and make friends. Don’t withdraw into your cave and isolate yourself further. With determination and the right attitude you will prevail.</p>
            `
    },
    {
        title: "Spiritual Thought",
        author: "Samuel Teoh",
        feature: null,
        date: "May 29, 2025",
        issue: 16,
        category: "Spiritual Thought",
        subcategory: ["Bible"],
        type: null,
        image: null,
        content: `
                <p>Today’s Bible verse:</p>
                <p>“For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.” Jeremiah 29:11.</p>
                <p>As we conclude the school year, we reflect on everything the Lord has done for us from the beginning until the end. In the classroom, while learning Algebra II with Mr. Shen and struggling through exams and homework, playing hard during Intramurals and running for the Distance Challenge, we’ve seen how God used these experiences to change our lives and build us up. The end of the school year is also a time to look toward the future. Through this verse, we can have hope and reassurance that God will be with us through whatever journey, and mountain that we have to climb to reach the goals we’ve set for ourselves. As the seniors move on to college and the rest traverse to the next chapter, we want to continue trusting in God, knowing that our plans are in his hands, all we need to do is trust in Him and His guidance.</p>
                <p>Prayer:</p>
                <p>Dear God, thank you for your promise in Jeremiah 29:11, for being with us every step of the way, both in our highest moments and our lowest times. Although school and life can sometimes be overwhelming, with homework, tests, exams, and pressure, thank you for your guidance and strength that I hold onto. Thank you for your plan and will, giving me hope and a future. As I end the school year, please help me to continue pursuing you and the plan you have for me. Help my efforts in school be part of a greater purpose that you are shaping in my life.</p>
                <p>In Jesus’ Name, Amen.</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            `
    },
    {
        title: "Award Ceremony",
        author: "Samuel Teoh",
        feature: null,
        date: "May 29, 2025",
        issue: 16,
        category: "School Updates",
        subcategory: ["Award Ceremony"],
        type: null,
        content: `
                <p>After House Time on Friday, Primacy congregated on the sixth floor to hold the 2024-25 Awards Convocation. To begin, the Primacy Faculty and Staff held worship and music, and then Mr. Hawkins gave the Invocation. Dr. Pheirim then welcomed everyone with a short keynote address, introducing Mr. Shen to present the House MVP Awards.</p>
                <p>The House MVP Awards honored one student from each House who made a significant and positive impact throughout the school year. House sponsors introduced their MVPs with thoughtful descriptions before inviting them on stage to receive their awards. Following this, Dr. Pheirim presented the Student Awards. The Primacy Spiritual Leadership Award was given to Jolie Lin for her strong example of spirituality and dedication to knowing God. The Excellence in Community Service Award was presented to Ayu Ogura, recognizing her heartfelt commitment to volunteering and service in various areas.</p>
                <p>The Primacy Excellence in Sportsmanship and Athletics Award was given to Chiung Wu, through Intramurals and Distance Challenge, showed his care for others both off and on the field. The Primacy Academic Excellence Award was received by Andy Tu, who achieved the highest academic honors and is an inspiration to all around him. The Primacy Develope Wisdom Award was presented to Samuel Teoh for his academic excellence and pursuit of usable knowledge.</p>
                <p>Two special awards were presented for the 2024–25 Primary school year. The Exact Path Trophy Champion was awarded to Chihoko Tanaka, who earned over 100 trophies and spent nearly 50 hours on Exact Path, demonstrating true dedication and knowledge. The Intramurals Distance Challenge Champion went to Andy Tu, who ran over 200 kilometers during the past school year, far outpacing any other student.</p>
                <p>The Golden Laurels of Primacy Award was given to Yi-Chen Chin, Satoru Kumazawa’s mother, and Kuang-Chien Lee and Yen-Ju Chen, who are Phoebe Lee’s parents. With sincere messages to Primacy, they received high honors as Primacy’s most supportive and impactful parents. After the presentation of the awards, the Choir then performed ‘The Climb’ by Miley Cyrus, filling the sixth floor with beautiful voices and song.</p>
                <p>The second stage of the Awards Convocation began with the Primacy Ambassador Awards. The Primacy Ambassador Awards are given to students who show what it means to be a model Primacy student through the twelve fundamental pillars of the Primacy Education, which include Leadership, Community Service, Creativity, and Health.</p>
                <p>Then, Dr. Pheirim gave out the Faculty Service Awards for teachers and faculty leaving Primacy in the following school year. For five years of service, both Mrs. Corkum and Ms. Daniel received awards. Primacy then said goodbye to Mr. Tooley, Ms. Daniel, and Mr. Hawkins, who would be leaving the next school year. Many pictures, hugs, and words were exchanged, and Primacy shared an emotional farewell. Then, with a prayer by Mr. Harper, Primacy’s 2024–25 Awards Convocation concluded.</p>
            `
    },
    {
        title: "Drama Night",
        author: "Samuel Teoh",
        feature: null,
        date: "May 29, 2025",
        issue: 16,
        category: "School Updates",
        subcategory: ["Club", "Performance"],
        type: null,
        format: "png",
        content: `
                <p>After the Awards Convocation came the long-awaited Drama Night. With multiple debut performances during the Banquet and Primacy’s Church Service, the Drama Club pulled off their first-ever Drama Night at Primacy to showcase the plays and skits they’d practiced in the past semester. To kick off drama night, the Primacy Dance Club showed off their dance skills by performing ‘Illusion’ by aespa. Students were mesmerized by both the coordination of the dancers and the powerful music.</p>
                <p>Then, the first play came onto the stage, starring Dino Wang as Superman and Yuna Wu as Superman’s Wife. The two had a hilarious back-and-forth conversation as Superman’s Wife convinced Superman to hold Kryptonite, a stone that would surely kill him. The audience was full of smiles and laughter as they saw two sides of Yuna and Dino that they’d never seen before. Drama Club was off to an incredible start with ‘Superman’s Wife’!</p>
                <p>After ‘Superman’s Wife’, the Choir walked onto the stage to perform ‘Zombie’ by The Cranberries. It was a song that was unfamiliar to the Primacy crowd and allowed them to relax and enjoy the beautiful song, music, and harmonious singing.</p>
                <p>Next, Drama Club’s second performance arrived in the form of ‘The Disease’. One by one, Hirotaka Chen, then Ayu, then Dino, arrived on the stage with a different type of disease. As each disease was transferred onto Hirotaka sitting on the stage, the audience laughed and watched Hirotaka get sicker and sicker. When a pregnant woman, played by Cheryl Lee, arrived and Hirotaka ran off the stage, the audience fell apart in laughter.</p>
                <p>Another intermission happened, with the Digital Arts club showcasing a movie they’d been working on for the past couple of months. Based on the video game ‘Street Fighter’, the movie starred Ayu Ogura as she and her friends traveled through multiple levels of the school to compete in different games. Losing in a game meant losing your life, raising the mounting stakes. The audience was completely gripped by the plot, enjoying the dramatic acting of their classmates.</p>
                <p>The second-to-last play of Drama Club was ‘The Helpline’, which featured Ayu on the stage. With Lilian Chou in the back acting as a woman whose house was burning down, Ayu responded to her with easygoing banter and small talk. The hilarity of the situation brought many smiles to the crowd.</p>
                <p>The Drama Club Finale came: ‘The Con Man’. The Drama Club members had been preparing for the skit ever since the club was founded, and it was showtime. To begin, Hirotaka Chen, as the Con Man, and Samuel Teoh, as the Con Man’s friend, sat on the stage. Hirotaka showcased his incredible acting skills and the ability to ‘con’ other people as he takes money, outwits a robber, and walks away as if nothing happened. However, Samuel then gives him a daunting task: steal the heart of a woman. As a hilarious and surprising plot unfolded, Drama Club ended their Drama Night with a powerful and entertaining finale.</p>
                <p>To complete the school day, the Personal Fitness class danced on stage to ‘Bye Bye Bye’ by NSYNC. It was a Zumba dance that they had practiced for several weeks, and the students enjoyed watching their classmates on the stage actively performing energetic moves. There is no doubt that Drama Night was a success, with students waiting excitedly in anticipation for the next Drama Night!</p>
            `
    },
    {
        title: "Spelling Bee",
        author: "Samuel Teoh",
        feature: null,
        date: "May 29, 2025",
        issue: 16,
        category: "School Updates",
        subcategory: ["Spelling Bee", "Academic", "Competition"],
        type: null,
        content: `
                <p>On Friday, May 23rd, the Primacy Spelling Bee began. For the past couple of weeks, students have been studying a list of five hundred words sent out by Ms. Daniel to be tested on for the Spelling Bee. The winner of the Spelling Bee will receive one hundred and twenty points for their House, as well as three thousand dollars. Suffice it to say, the Spelling Bee was a huge event that many students were looking forward to, both to push their House to victory and win glory for their House.</p>
                <p>At three in the afternoon, Primacy students walked to their House floors to begin their in-House Spelling Bee to determine who would be the finalists to advance to the next round. After only several minutes, most of the students were eliminated, with only two remaining. With two students representing their House, the entire school climbed to the sixth floor to witness a showdown of spelling and memorization between Houses.</p>
                <p>In four tables arranged in front of the audience, the finalists sat down with a whiteboard and a marker. Then, Dr. Pheirim began reading out the words one by one, beginning with ‘delegation’.</p>
                <p>Students hear the word two times before the ten-second timer begins, and must put down their pens when the timer is up. Within ten words, most of the students were eliminated.</p>
                <p>Four students remained: Andy Tu (Blue Tang), Chihoko Tanaka (Wolfpack), and Samuel Teoh and Zack Chen (The Swarm). Word by word, minute by minute, the four students persisted on until far beyond what anyone had imagined. However, with the word ‘clowder’, Zack was eliminated, and the three finalists remained. Due to time constraints, the Spelling Bee winner could not be decided on Friday. Instead, the three faced a rematch on Tuesday, with a hundred new, more difficult words added to the list.</p>
                <p>On Tuesday, the three finalists went up to the sixth floor during lunchtime with a handful of students as their audience to battle it out. After several dozen words, it seemed like there would be another tie, but then Chihoko exited the round with one of the newly added words. It now became a battle between Andy Tu and Samuel Teoh. With word after word, the two contestants continued to spell each one almost effortlessly.</p>
                <p>Even after the bell rang, they still continued. Then, Dr. Pheirim pronounced ‘calvities’ with an unexpected pronunciation. With that, Primacy had their 2025 Spelling Bee Champion: Samuel Teoh from Swarm. He was awarded the medal, three thousand NTD, and 120 House Points on the seventh floor during the Yearbook Signing Party.</p>
            `
    },
    {
        title: "House Points",
        author: "Samuel Teoh",
        feature: null,
        date: "May 29, 2025",
        issue: 16,
        category: "School Updates",
        subcategory: ["House", "Competition"],
        type: null,
        format: "JPG",
        content: `
                <p>On the last day of school, after finishing their final exams, Primacy students gathered on the seventh floor for the Yearbook Signing Party. In their Houses, Mr. Shen first announced the Spelling Bee winners, awarding medals to all three finalists in recognition of their talent and dedication. Then came the moment everyone was waiting for: the announcement of the House Championship.</p>
                <p>In fourth place came Gator Nation with nearly three thousand impressive House Points, just behind Wolfpack, who finished third. Then came the long-awaited results of the two rival Houses—Blue Tang and The Swarm. With a narrow margin of just forty-three points, Blue Tang claimed the lead and secured first place in the House Championship!</p>
                <p>In the past two years, the Yearbook has always come late, and during the Yearbook Signing Party, there was no Yearbook. However, this year, with a purple and blue cover, the Yearbook was handed out to each of the students. With their Yearbook in one hand and a pen in the other, students walked around the floor having their classmates and teachers sign. The bubble tea, mistakenly sent up the mountain to TAAS, arrived just in time for students to enjoy as they took their last pictures and signed each other’s books and shirts. With the smiles and goodbyes, the 2024-25 Primacy school year came to an end.</p>
            `
    },
    {
        title: "Semester Reflection",
        author: "Samuel Teoh",
        feature: null,
        date: "May 29, 2025",
        issue: 16,
        category: "School Updates",
        subcategory: ["Reflection"],
        type: null,
        format: "JPG",
        content: `
                <p>The second semester of the 2024-25 school year has been a wild and incredible ride. From Chinese New Year Decorations, to Banquet, to AP exams, to finally graduation, Primacy reflects on the school year and the countless memories we’ve made together.</p>
                <p><strong>Robotics Competitions (Issue VII) by Ayu Ogura</strong></p>
                <p>Robotics is like a sport; it requires strong teamwork, a massive amount of preparation, diligence, and patience. As Banana RC participated in several competitions, I learned that without collaboration, winning is impossible. Coders, builders, drivers, and a great sponsor all play significant roles in great preparation and performance.</p>
                <p>Multiple times, we had to disassemble the parts or even almost the whole robot to fix the issues with the mechanisms, or to make further improvements. But with trust in team members and patience, we were able to overcome every obstacle that we faced. It is a challenging but also rewarding experience. Do you want to be part of this cool experience? Join us, and next year, we are going to the world championship.</p>
                <p><strong>Chinese New Year Decorations (Issue X) by Hana Sato</strong></p>
                <p>Chinese New Year decorations showed us how to combine teamwork and creativity. The large red snake on the elevator, designed by Mr. Harper, was eye-catching, and I think it helped us to win first place. All of the Swarm members worked hard and put effort into improving and making it the best decoration. We learned the importance of planning, supporting each other, and creating something meaningful as a team.</p>
                <p><strong>Superbowl Party (Issue X) by Sam Yeong</strong></p>
                <p>Super Bowl LIX — or as I like to call it, The Kansas City Massacre — saw the Philadelphia Eagles dominate the Kansas City Chiefs with a final score of 40–22. But let’s be honest: the game was effectively over by the end of the third quarter, with the scoreboard reading 36–6. The Chiefs only managed to narrow the gap thanks to the Eagles giving their second-string players some well-deserved game time.</p>
                <p>Although the Super Bowl isn't officially on the academic calendar, it has become a beloved tradition here at Primacy. It’s one of those rare occasions where both students and teachers get to enjoy a relaxed, community-centered morning celebrating a classic American tradition. Of course, I suspect a few students were more excited about the time off than the football itself — and still might not know how the game is actually played!</p>
                <p>As for the food, the Student Association outdid themselves with a delicious spread of breakfast items. My personal favorite? The croissant sandwiches — well done, team!</p>
                <p>Here’s hoping that this Super Bowl tradition continues at Primacy for many years to come.</p>
                <p><strong>Spring Shark Week (Issue XI) by Larissa Kuo</strong></p>
                <p>My favorite day of shark week is PJ day! Not only do I get to wear comfortable clothes to school, but I also didn't have to try too hard. All I had to do was hop out of my bed, but on my backpack, and leave the house. Very simple yet very comfortable.</p>
                <p><strong>Primacy Banquet 2025 (Issue XI) by Zack Chen</strong></p>
                <p>The Banquet is the most fun yet most stressful event that SA has ever planned. From choosing the venue and deciding on the dress code to coming up with the perfect theme, the process was exciting and gave us a lot of creative freedom. We enjoyed brainstorming ideas and imagining how everything would come together on the big day. There were intense discussions during meetings, and our private group chat sometimes turned into a battleground where SA Officers were expressing conflicting ideas.</p>
                <p>Balancing everyone’s visions while trying to stick to deadlines and stay within budget tested our teamwork and communication. In the end, though, we learned a lot from the process, and seeing the final result come to life made all the stress and effort worth it.</p>
                <p><strong>Spring Spiritual Emphasis Week (Issue XIII) by Andy Tu</strong></p>
                <p>Awareness. Being aware of sin was the concluding lesson from my last SEW at Primacy, and it was demonstrated via a striking science experiment. Sin would appear colorless, only showing itself as a manifestation of darkness later on. Much like in the color change experiment, we must identify and refrain from sin to prevent it from affecting our lives. Ultimately, awareness is essential for a pure and healthy lifestyle.</p>
                <p><strong>Care for Others Day (Issue XIII) by Samuel Teoh</strong></p>
                <p>Care for Others Day was filled with fun and service. As part of the National Honor Society, we worked to organize and create a community service event at the Taipei Adventist Hospital for the elderly, as well as give out flowers for passerby.</p>
                <p><strong>Food Fair at TAAS (Issue XIII) by Chihoko Tanaka</strong></p>
                <p>Quesadillas. Nachos. School flyers. Three seemingly unrelated objects were in the Primacy booth at the TAAS Food Fair to raise funds for SA. We each had a task: setting up our table with flyers, asking people what they wanted to buy, preparing quesadillas and nachos, and distributing napkins and sauce.</p>
                <p>Through this fair, I noticed that regardless of our cultures, we all smiled when we had delicious dishes provided at the fair. I realized food bridges cultural differences. A simple meal can echo happiness.</p>
                <p><strong>World Scholar’s Cup (Issue XIV) by Samuel Teoh</strong></p>
                <p>Attending the Hsinchu Regional Round of the World Scholar’s Cup was an eye-opening experience. When we were preparing for the competition, I didn’t really know what to expect. However, when I got there, I quickly learned and found that it was much more fun than I had expected. By the end of the competition, my confidence had grown and I really enjoyed my time there.</p>
                <p><strong>Lih-Jen Sports Games (XIII) by Michael Brannaka</strong></p>
                <p>On March 24th, about half of Primacy’s students went to Lih-Jen International Private School for friendly sports games with them and a visiting school from San Francisco, California called Alice Fong Yu Alternative School. This was my first opportunity to visit Lih-Jen, but more importantly, I learned that Alice Fong Yu (abbreviated AFY) is a Chinese immersion school with grades K-8. It was a great opportunity to build bonds with Lihjen as well as welcome the American students to our beautiful island.</p>
                <p><strong>Primacy Church Service (Issue XV) by Taelyn Chen</strong></p>
                <p>Attending the service that Primacy held at church was an enjoyable experience for me. I had fun joining the Drama Club and memorizing my lines, which weren't quite as hard to remember as I had expected. Choir practice as well – it's always fun when you get to sing with your friends. It wasn't anything new for me to be involved in the service, since I go to New Life Church, however, this experience was more exciting, since a large part of the school was involved.</p>
                <p><strong>Spring SA Day (Issue XV) by Ai-En Lin</strong></p>
                <p>Although the weather wasn’t great and there was a bit of rain, the students still enjoyed the activities. In the morning, some students went into the water to have fun with friends, while others stayed in the indoor area playing games like Two Truths and a Lie and Charades to get to know each other better. In the afternoon, each House started recording its music video. This was the last SA event of the semester, and I hope it left everyone with good memories.</p>
                <p><strong>Know God Day (Issue XV) by Hirotaka Chen</strong></p>
                <p>My favorite part of Know God Day was the group activities in the afternoon at Taipei Zoo. It was a great opportunity to connect with more students and get to know each other better in a fun and relaxed setting. I also really enjoyed filming and editing the video for the video challenge—it was a creative and rewarding experience that allowed me to work closely with others and contribute something meaningful to the event.</p>
            `
    },
    {
        title: "Message from the President",
        author: "Zack Chen",
        feature: "Zack Chen",
        date: "May 29, 2025",
        issue: 16,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        image: null,
        content: `
                <p>Hello everyone, I am Zack, THE SA President (at least for the next few days).</p>
                <p>When I was first given this role, I didn’t know what to expect. I couldn’t believe I was the one filling Loahan’s shoes – someone whom I looked up to for the whole school year. And if you know Loahan, you know those are some REALLY big shoes. Even bigger than Mr. Sam’s size fourteen shoes.</p>
                <p>It felt unreal to finally be part of something I had admired for so long. I kept thinking about the SA officers before me, the ones I was friends with, and the ones I looked up to. They always seemed so confident and in control. They felt far ahead of me, almost out of reach. Then suddenly, it was my turn. My turn to be that kind of person for someone else. My turn to lead.</p>
                <p>At first, I’ll admit I wanted the recognition. I wanted to get the special treatment that SA officers will have.</p>
                <p>I wanted to feel like I mattered, like my presidency could leave a long-lasting mark on the school. I had all these goals and dreams about what I could bring to the table.</p>
                <p>But once I was actually in the role, I realized that none of those things – the titles, the attention, the plans – could prepare me for what it really meant to be SA President.</p>
                <p>Being SA President isn’t about being in the spotlight. It’s about making sure the spotlight is shared. It’s not about being seen, it’s about seeing others.</p>
                <p>It’s about noticing the people who arrive early, stay late, work quietly in the background, share ideas in group chats, support us from the sidelines, and giving them the recognition that they deserve.</p>
                <p>Being the President isn’t about having control over everything. Leadership isn’t about being the loudest voice in the room. It’s about making sure everyone has the chance to speak up.</p>
                <p>I did a great job (in my opinion) of making sure that everyone’s opinions were heard, and I think that is what made my team amazing. At first, I wasn’t sure if our team would be good. I wasn’t friends with all of the members, and I didn’t know what they were capable of. But I was so surprised.</p>
                <p>My team wasn’t just good, they were amazing. As we continued our journey throughout the school year, I saw how much effort each person put in, how willing everyone was to listen, and how committed we all were to making ideas turn into reality.</p>
                <p>To my amazing team in SA: Thank you Jolie, Chihoko, Ai-En, Larissa, Joanna, Steffi, and Samuel. Thank you for your dedication, creativity, and endless energy. I know we had a lot of ups and downs and differences in opinion, but I hope you guys saw that I tried my best to keep everything in order.</p>
                <p>I want to thank all of you for making my job a lot easier and much more fun. I especially want to thank my Executive Vice President, Chihoko, who always helped me with proposals, backed me up, gave me advice when I had ideas, and called me late at night to solve problems with our events. She was the best Executive Vice President that I could ever ask for.</p>
                <p>To my team in SA, I’ll miss our Monday meetings, random messages in the group chat, our inside jokes, and the way we always somehow procrastinate until the last minute but still pull miraculously, making everything work. I love you all. You are the best SA team I could ever ask for.</p>
                <p>To the rest of Primacy, thank you for believing in me and giving me the chance to serve as your student president.</p>
            `
    },
    {
        title: "What an Intramural Year!",
        author: "Ayomi Pheirim",
        feature: "Ayomi Pheirim",
        date: "May 29, 2025",
        issue: 16,
        category: "Feature",
        subcategory: ["Teacher"],
        type: "Secondary",
        content: `
                <p>Wow, what a year it has been for Intramurals! I’m so incredibly proud of every single one of you for jumping in and making it such a blast. I truly believe that playing sports together has made us all stronger, friendlier, and happier. I’ve seen firsthand how you’ve all grown!</p>
                <p>Remember when we first started, and some of you were a little unsure about the changes in Distance Challenge? Well, look at us now! As you got into the swing of things – feeling that rush of competition, learning new sports, and especially hanging out with friends (and making new ones!), something amazing happened. Minds changed, and soon everyone was looking forward to Friday and Intramurals.</p>
                <p>It was awesome to see how even the most competitive people started to appreciate a good game, win or lose. Handshakes replaced bragging, and teamwork really shone! Houses started working together, planning strategies, and even when we had house rivalries, there was always tons of respect. It all added up to an absolutely fantastic year of fun.</p>
                <p>One of the coolest parts for me was watching people discover that they were actually really good at a sport or game they’d never tried before. Seeing that spark of interest made me so happy and super excited to find new ways to help you get even better and keep that passion alive.</p>
                <p>In my two years at Primacy, I’ve seen so many positive changes: attitudes, how we interact, skill development, and even what we think “fun” means. My biggest hope and goal for the future is that intramurals keep getting better and better. I want it to help us stay healthy, encourage and foster friendly competition and good sportsmanship, improve how we connect with each other, and most importantly, let’s keep having a ton of fun and making awesome memories together!</p>
                <p>What was your favorite intramural moment this year? Let me know!</p>
            `
    },
    {
        title: "House Distance",
        author: "Samuel Teoh",
        feature: null,
        date: "May 29, 2025",
        issue: 16,
        category: "Intramurals",
        subcategory: ["Sports", "Distance Challenge"],
        type: null,
        content: `
                <p>This school year, Primacy implemented a new way for students to exercise, get their muscles working, as well as earn points for their House. Many students showed up to contribute distance to their House and push their teammates to win the Distance Challenge!</p>
                <p>Two of the closest competitors in both semesters of Distance Challenge were Blue Tang, carried by Andy Tu with over 200 kilometers through the entire school year, and The Swarm. In the first semester, The Swarm overtook Wolfpack to place second in the Distance Challenge. In the second semester, The Swarm then overtook Blue Tang to overthrow the reigning champions.</p>
                <p>In third and fourth place for both semesters are Wolfpack and Gator Nation. From Wolfpack, both Matthew Choi and Hirotaka Chen overtook the rest of their House members to become the dominant force in the Distance Challenge. Their constant pushing made Wolfpack a formidable threat to the other Houses.</p>
                <p>Behind the other Houses, Gator Nation’s House Distance was led by Isaiah Chieh and Satoru Kumazawa. Although behind the other Houses in Distance Challenge, Gator Nation placed much emphasis in their Intramurals games. In this way, Gator Nation outperformed other Houses consistently in sports while also putting in an admirable effort in running laps for their House.</p>
                <p>Introduced for the first time, the 2024-25 Distance Challenge was ultimately a success. Although, in Dr. Pheirim’s words, it took several weeks for the students to ‘warm-up’ to the idea, the Houses quickly caught on and the Distance Challenge completed its mission for those not competing to stretch and warm their muscles.</p>
            `
    },
    {
        title: "Letter from the Newsletter Team",
        author: "Samuel Teoh",
        feature: null,
        date: "May 29, 2025",
        issue: 16,
        category: "Editorial",
        subcategory: [],
        type: null,
        image: null,
        content: `
                <p>On September 13th, The Primacy Times released its first issue, featuring Lilian Chou on ‘Dating Advice’. The cover page, a portrait photo of our featured interviewee, became our signature that remained throughout all sixteen of our issues this school year.</p>
                <p>Our first issue came with many comments and feedback – Dr. Pheirim said that her AP Lit class would study and analyze the ‘Dating Advice’ article Lilian wrote.</p>
                <p>As we progressed to Issue II (featuring Joanna Tang on her ‘First Crush’), we learned how to use Substack to send out our newsletters. We decided that although lighthearted romance would attract attention and smiles, we wanted to expand the scope of our newsletter.</p>
                <p>From Issue III (featuring Leo Li with ‘Broken Dreams’), we included the Distance Challenge results and the scores of our Intramurals games.</p>
                <p>From Issue VI onward, the newsletter caught pace and got into rhythm. We stabilized our formatting so that the pages and articles from issue to issue would be consistent, and maintained congruous designs.</p>
                <p>From then on, we began diversifying our topics to include articles on pop culture and covering more school events.</p>
                <p>Although we encountered several hurdles along the way, we always showed up by the deadline to publish our issues on time.</p>
                <p>We learned many things along the way – how to write articles by a certain deadline. How to interview other classmates and write accurate articles. How to format and design newsletters on Canva. But, most importantly, we learned more about our classmates and teachers. Whether it was Hana’s journey across four different schools or Jasmine’s involvement in percussion, we discovered more about our classmates to share their stories with the school.</p>
                <p>As we find ourselves at the end of the school year, we want to thank the school for allowing us to have this platform to share our articles.</p>
                <p>Thank you to the countless students and teachers who’ve given their time and effort to be interviewed and write for the newsletter.</p>
                <p>Last but not least, we want to thank you, the reader. You are the reason why we tell these stories.</p>
                <p>We want to extend an invitation to you to write for us. Our newsletter is not strictly exclusive to the newsletter team – we would love to publish what you submit to us, whatever it may be.</p>
                <p>“Everyone has a story, and there’s something to be learned from every experience” (Oprah Winfrey).</p>
                <p>The Primacy Times started with one primary goal: to bring students closer together. We wanted this newsletter to offer a window into each other’s lives, to show a side of the classmate sitting next to you that you may not have seen before.</p>
                <p>Friendship begins with connection, but we can’t truly connect without understanding, and understanding comes first by sharing our stories.</p>
            `
    },
    {
        title: "Fixing My Back",
        author: "William Lee",
        feature: "Kuan Jian",
        date: "April 28, 2025",
        issue: 15,
        category: "Feature",
        subcategory: ["Student"],
        type: "Cover",
        content: `
                <p>When I was in third grade, my class teacher realized that I couldn’t walk in a straight line or stand up straight, no matter how hard I tried. My teacher then told me to go and see a doctor.</p>
                <p>I visited the doctor and he told me that I have scoliosis, which is a back problem where the spine has an irregular curve. The reason why I had scoliosis is something I still don’t know today.</p>
                <p>After diagnosing me with scoliosis, my doctor told me to visit a place where they would help me fix my problem. However, the process of rehabilitation was exhausting and draining to me. Every day, as I continued trying to fix my back problem, every step and method was tiring.</p>
                <p>My back hurt almost all the time, but what got me through it was the thought that if I could cure my scoliosis I might become 180 centimeters tall. The doctor told me to sit straight every time he saw me slouch on the seat, but I was too lazy and tired to do so.</p>
                <p>However, as the rehabilitation process continued, I found that sitting up straight no longer hurt my back and it became easier and easier to do so.</p>
                <p>Through this process, I realized the importance of continuing to persist through difficult times, even when they hurt you physically and mentally, because in the end everything will work for good.</p>
            `
    },
    {
        title: "Falling in Love with Volleyball",
        author: "Samuel Teoh",
        feature: "Liz Aoyama",
        date: "April 28, 2025",
        issue: 15,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
                <p>“Be the change you want to see in the world.” This is a quote that is the motto of my entire volleyball life. This quote gave me the reason why I started to play volleyball.</p>
                <p>I have loved watching volleyball matches ever since I was eight. But there wasn't any volleyball team for elementary school kids in my area. Some years passed and I entered junior high school.</p>
                <p>When I entered school, I almost joined the basketball club because I had been playing basketball ever since I was in elementary school. Then I fell in love with volleyball and made up my mind to play volleyball in junior high school.</p>
                <p>However, that was before the COVID-19 pandemic. Because of the pandemic, the government prohibited most activities, and I wasn't able to attend the school entrance ceremony.</p>
                <p>The entire school had turned to online classes, so there were no club activities for me to attend.</p>
                <p>After several months, I finally went back to in-person school and resumed the club activities that I had been looking forward to ever since I entered junior high. It was an incredibly emotional moment for me when I played volleyball for the first time since the COVID-19 pandemic began.</p>
                <p>I started playing volleyball with my friends at this school this semester when Mr. Ayomi began the volleyball club on Sundays. This volleyball club brings me joy, not only because I can attend and play the sport that I love, but also because I can see how the others around me can feel the happiness I had when I first fell in love with volleyball.</p>
            `
    },
    {
        title: "Know God Day",
        author: "Samuel Teoh",
        feature: null,
        date: "April 28, 2025",
        issue: 15,
        category: "School Updates",
        subcategory: ["Know God Day", "Pillar Day", "Field Trip"],
        type: null,
        content: `
                <p>On Friday, April 18, Primacy students arrived at the entrance of Taipei Zoo. Although the weather was on the brink of rain, the clouds held stable with only minimal sprinkles. Gathered at the entrance, students played an icebreaker game led by Ms. Iris. A fun and interesting variation on 21 questions, students guessed the famous person pasted on their forehead, with their House members only allowed to give yes or no answers.</p>
                <p>With lots of laughter and excitement, students entered the Taipei Zoo with their Houses to complete the animal scavenger hunt. They traveled to the end of the zoo first and made their way back toward the entrance, solving tricky clues from the Know God Committee. Each animal they found earned their House twenty points, with an extra twenty points for returning to the meeting spot on time.</p>
                <p>In the afternoon, students gathered together in their afternoon groups, which they had chosen in the past week. Several of the groups stayed at the panda exhibit, enjoying lunch and drinks. Others travelled on the Maokong Gondola, marvelling at the incredible view below.</p>
                <p>As the day came to a close, groups met back together at 3:10 with prayer and dismissal. Know God Day, the final Pillar Day of Primacy’s 2024-25 school year, was a powerful reminder of God’s creation and glory.</p>
            `
    },
    {
        title: "Primacy Service",
        author: "Samuel Teoh",
        feature: null,
        date: "April 28, 2025",
        issue: 15,
        category: "School Updates",
        subcategory: ["Bible", "Club", "Performance", "Music"],
        type: null,
        image: null,
        content: `
                <p>Primacy hosted Easter service for New Life International Church on Saturday, April 19. Arriving as early as 9:30, Primacy students from Guitar Class, Drama Club, Choir, and Bell Choir took the elevator up to the third floor to practice and prepare their respective performances.</p>
                <p>Opening with a prayer by Mrs. Corkum, the service began with Dr. Pheirim, Mr. Ayomi, and Mrs. Corkum singing ‘Christ is Enough’, Jolie Lin on the piano, and Mr. Shen on the guitar. Following the song, the congregation sang ‘Because He Lives’, with Samuel on the piano.</p>
                <p>Next, the Bell Choir performed ‘For the Beauty of the Earth’ in a harmonious ringing of bells and sounds, captivating the entire audience. After the Bell Choir’s incredible performance, Lilian Chou gave an entertaining story about an elephant that had a problem of always forgetting things.</p>
                <p>Then Jolie and Joanna, with Shota on the guitar, sang a medley of ‘What a Beautiful Name’ and ‘10,000 Reasons’. With powerful vocals and incredible harmony, the entire audience was moved by the special performance.</p>
                <p>Following the special music, Mr. Harper led a prayer and asked the audience for prayer requests. Although at first met with little response, a child’s voice broke through asking for a prayer regarding swimming lessons.</p>
                <p>Then, the requests and thanksgivings began flooding in. Mr. Harper prayed for all the requests, and the Garden of Prayer ended.</p>
                <p>The Choir opened with ‘I Can Only Imagine’ and a chorus of beautiful voices. Then, Drama Club arrived on stage with their second performance of the year – ‘A Parable of Shapes’. With Lilian Chou starring as the main character, a blob looking for somewhere to belong, the skit progressed as shape after shape came along, expressing their rhymes with eloquent verse.</p>
                <p>All of the shapes wanted to be associated with the blob, as it was not their ‘kind’. When, at last, the blob fell into despair, In-Spite-of-Man came along, teaching the audience that many find it hard to love those who are different, but real love is in spite of the flaws that we all have.</p>
                <p>After the skit, Dr. Pheirim gave a short message on the importance of loving those not only in our immediate circle, but everyone we meet. Instead of looking down on others, we should accept those we don’t understand because, through Jesus, by grace, we were also saved.</p>
                <p>Then, the entire congregation sang ‘Hosanna’ to end the Saturday church service with praise to God.</p>
            `
    },
    {
        title: "Spring SA Day",
        author: "Samuel Teoh",
        feature: null,
        date: "April 28, 2025",
        issue: 15,
        category: "School Updates",
        subcategory: ["SA Day", "SA Event"],
        type: null,
        content: `
                <p>Primacy students arrived at school early on Friday morning at eight to take the bus to Heping Island Geopark. Because of heavy traffic in the face of rain, the bus arrived at the beach later than expected, and the schedule changed.</p>
                <p>Half of the students jumped into the water and began swimming. Even Mr. Shen was pushed into the sea by a group of students, to everyone’s laughter and enjoyment.</p>
                <p>While most of the students were playing in the water, other students were under the shelter playing games such as “Charades” and “Two Truths and a Lie”. Nearing lunchtime, the students who were in the water quickly showered, and the school gathered back together to collect the dumpling boxes that they had preordered.</p>
                <p>All the students dispersed for lunchtime and met back again at one in the afternoon to film their House videos.</p>
                <p>At the beach, the students got together and filmed their music video to match their newly written lyrics. Although rainy and cold, every House managed to finish filming their video by 2:30 pm and got back on the bus.</p>
                <p>Adapted from the song ‘Sunroof’ by Nicky Youre and dazy, each House rewrote the lyrics to fit their House spirit and prerecorded the song with at least three of their House members.</p>
                <p>On the bus ride home, the karaoke was turned on with the thanks of Ms. Iris, and the school listened as song after song came up and various students took turns singing.</p>
                <p>By the time the bus arrived back at Shilin, students and teachers were smiling but also exhausted from the long day and excited to begin their weekend break. A huge thank-you to the Student Association for planning this trip to Heping Island Park for the second SA Day!</p>
            `
    },
    {
        title: "Spiritual Thought",
        author: "Samuel Teoh",
        feature: null,
        date: "April 28, 2025",
        issue: 15,
        category: "Spiritual Thought",
        subcategory: ["Bible"],
        type: null,
        image: null,
        content: `
                <p>Today’s Bible verse:</p>
                <p>“If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.” - Romans 10:9-10</p>
                <p>Today’s verse reminds us that it is really that simple to be saved from our sins. Ever since the creation of the world, the penalty for our sins has been death and eternal life away from God, our creator. However, in the verse we can see that it is through Jesus’ death on the cross that we were saved from what we deserve.</p>
                <p>The way to salvation is simply confessing your sins and believing in Jesus. Many times, we think that it is through our own works – being nice to the elderly on the train, holding the door open for other people, performing random acts of kindness – that will lead us to heaven. But salvation is through Jesus, by grace, and all we need to do is believe in him.</p>
                <p>Prayer:</p>
                <p>Dear God, thank you for sending your Son Jesus down to earth to save us from our sins, even when we don’t deserve it. Your love for us is far greater than anything we could ever imagine, and we are so grateful that you’ve offered us a way out of our sinful lives. We know that we could never do anything to achieve salvation, and that it is only through your Grace that we are saved. Thank you for your faithfulness and love, and giving us the opportunity to share this good news with those around us.</p>
                <p>In Jesus’ name, Amen.</p>
            `
    },
    {
        title: "When I Stopped Eating",
        author: "Samuel Teoh",
        feature: "Yuna Wu",
        date: "April 14, 2025",
        issue: 14,
        category: "Feature",
        subcategory: ["Student"],
        type: "Cover",
        content: `
                <p>When I was 14, I went to Japan for vacation. On the first day that I got there, I became extremely sick and stopped eating. My eating disorder began on that day.</p>
                <p>At first, only when I ate food I became sick and wanted to vomit. However, as time progressed my trouble with eating became more exacerbated. Soon, even if I smelled food or witnessed other people eating I wanted to vomit. Because I didn’t want to vomit, I was afraid to eat, getting even sicker and more afraid of food. It became a neverending cycle that I could not break.</p>
                <p>Because I have very low blood sugar, when I barely eat for even a short period of time I get weak and uncomfortable. As I stopped taking food, I had no strength to continue my normal, daily activities. After I left Japan and came back to Taiwan, my eating disorder continued and my sickness became worse.</p>
                <p>When I visited the doctor, he warned me that if I didn’t eat, they would insert a thin tube into my body through my mouth and into my stomach in order to feed me food.</p>
                <p>He also said that I had lost too much weight, which was extremely dangerous because I had low blood sugar. If I don’t eat for a long time, I might faint or even worse. I was extremely afraid of these things happening, especially with regard to the feeding tube.</p>
                <p>Some days, I bought rice onigiri from 7-11 to try and overcome my trouble with eating food. However, after eating one bite I didn’t dare to eat it anymore because I started to feel nauseous.</p>
                <p>But because the doctor kept threatening me, I forced myself to eat and continued vomiting after eating. My progress reached nowhere.</p>
                <p>However, as I continued trying, my friend began helping me. She forced me to eat a little bit at school – progressively adding incremental bits each day. The food was light, mostly vegetables, and nothing greasy or too oily. If the smell or taste of the food was too strong, I would vomit and feel nauseous. However, my friend would not let me vomit out the food when I felt dizzy, but instead forced me to eat it, little by little.</p>
                <p>As time progressed, I slowly added more and more to my diet until I fully recovered. Although, at the time, I was unhappy with her because she forced me to do things I didn’t want to do and put pressure on me, I realized that it was only through her help I got better.</p>
                <p>Through this experience, I found that overcoming challenges is not about immediate success. Instead, success is only achieved through consistency and hard work – especially during the days when you feel like giving up. Those are the days that matter the most, and it is through pushing yourself through them that you overcome your greatest challenges.</p>
            `
    },
    {
        title: "Looking Back in Time",
        author: "William Lee",
        feature: "Satoru Kumazawa",
        date: "April 14, 2025",
        issue: 14,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
                <p>Entering a new chapter in your life always brings a rollercoaster of emotions. I felt this way when my family decided to move from Japan to Taiwan. As I arrived at Primacy and entered new experiences, I had many thoughts, feelings, and reactions to these life-changing events.</p>
                <p>I have always attended school in Japan and I was strongly against the idea of moving to another place. Leaving my familiar environment to start life in a completely new and different environment was scary and frightening to me. I was uncertain about whether I could adapt to a different country with a different culture and language. I was also unsure whether I could find friends in Taiwan because they had such a different upbringing than I did, and I didn’t want to leave behind the close friends I had in Japan.</p>
                <p>With all of these worries and doubts, I arrived in Taiwan. On my first day of school at Primacy, I was incredibly nervous. However, there was one student who came and talked to me, initiating the conversation with a friendly smile: Leo.</p>
                <p>Through that conversation, we gradually became friends and found that we were both interested in many similar things such as basketball. I slowly got used to school life and studying in English.</p>
                <p>As I made more friends, I realized that the students here at Primacy were very cheerful and easy to get along with. I felt more and more comfortable in this new environment. In the end, looking back at my move, I find that coming to Taiwan was a decision that I do not regret.</p>
            `
    },
    {
        title: "World Scholar's Cup",
        author: "Samuel Teoh",
        feature: null,
        date: "April 14, 2025",
        issue: 14,
        category: "School Updates",
        subcategory: ["World Scholar's Cup", "Club", "Competition"],
        type: null,
        content: `
                <p>On March 29 and 30, the Regional Round of the World Scholar’s Cup at Hsinchu began. Students from international schools around Taiwan gathered at Korrnell Academy to participate in academic competitions and fun.</p>
                <p>Representing Primacy, Andy Tu, Samuel Teoh, and Andy Li drove down to Hsinchu with Mr. Brannaka as the head coach and sponsor. Having practiced multiple weeks ahead of the competition, the trio was relatively new to the Scholar’s Cup (aside from Andy Tu, who was a one-year veteran).</p>
                <p>The first competition was Team Debate. The three faced off against a team from the International Bilingual School at Hsinchu-Science-Park. Although suffering a loss due to unpreparedness and lack of experience, the Primacy team moved determinedly forward and won two debates in a row for the final rounds of team debate! The final round of debate ended at 2:00 pm, after which was an hour break for lunch.</p>
                <p>The second competition was Collaborative Writing (or Collabowriting). Gathering in the spacious lunch area underground, the three received three prompts and selected their own to write about. Given about an hour to complete a multiple-page essay responding to the prompt, Andy Tu wrote about ‘Eternum’, a serum that would give the intaker the ability to live forever but did not exempt them from harm.</p>
                <p>Still held in the underground lunch hall, the third competition split the three members apart and intermingled them with students from other international schools: the Scholar’s Challenge. With an interesting twist to a regular multiple-choice exam, students are able to choose multiple answers for each question. The Scholar’s Challenge lasted sixty minutes, with students having to answer one hundred and twenty questions.</p>
                <p>The second day of the World Scholar’s Cup was hosted at National Yang Ming Chiao Tung University. Students arrived in a large auditorium that could accommodate thousands of attendees. The hosts of the Cup held an entertaining icebreaker game to liven up people’s spirits – balancing an alpaca on your head.</p>
                <p>Representing Primacy, Andy Tu walked up to the stage to face off dozens of students from other schools. While balancing a stuffed alpaca on his head, Andy high-fived other students, spun around, touched the floor, and even sang ‘Viva La Vida’ by Coldplay to the entire crowd. Down to the last five students, Andy lost trying to balance the alpaca while walking under a limbo pole – good try, Andy!</p>
                <p>The final academic competition of the World Scholar’s Cup was the Team Bowl. Each delegation received a clicker to select their answers as questions appeared on the screen up stage. Andy Tu and Samuel Teoh were quick to respond within fifteen seconds and shared many smiles and high-fives when the answer was revealed.</p>
                <p>With all of the academic competitions completed, the three watched the Debate Showcase as the top debaters from the previous day were called up to debate in front of the entire crowd. An incredible debate ensued as students argued on whether the government should create a new and improved Hsinchu named ‘Hsinchu2’. Although the Negative team ultimately won the debate, all the students who were watching could learn much from the Showcase.</p>
                <p>After the Debate Showcase, the World Scholar’s Cup's very own ‘Un-Talent Show’ proceeded. From dozens of submissions, Andy Tu was selected as one of the students to perform their talent! Amid dance and music performances, Andy presented on stage an incredible chemistry performance. Mixing two chemical elements together to create a brilliant green solution that glowed in the dark, Andy displayed the intriguing and fascinating world of science to the audience.</p>
                <p>Finally, what all the students were waiting for arrived – the Closing Ceremony. With over a thousand medals and trophies to be awarded, students were called onto the stage to win either silver or gold medals. In total, Andy Tu and Samuel Teoh won nearly ten gold and silver medals! What was most shocking and exciting of all – they’d won second place, out of seventy teams in the Senior Division, in the Team Bowl! Ranking as the seventeenth team overall, the three qualified for the Global Round, to be held in Korea.</p>
                <p>All in all, the World Scholar’s Cup was a wonderful and insightful experience to be cherished. Although arduous and academically rigorous, all the team members had a great time competing against other schools and learning more about the world around them!</p>
            `
    },
    {
        title: "Studying for APs",
        author: "Jude Chin",
        feature: null,
        date: "April 14, 2025",
        issue: 14,
        category: "School Updates",
        subcategory: ["Academics", "Exam"],
        type: null,
        content: `
                <p><strong>Know the Format</strong></p>
                <p>Each AP exam has its own structure. Take time to review the number of sections, question types, and timing. The College Board website offers free practice materials, so use them!</p>
                <p><strong>Make a Study Plan</strong></p>
                <p>Start by listing the topics covered on the exam. Then, break your study time into manageable chunks. A little every day beats cramming the night before. Sometimes going through each topic just fifteen minutes every day for a week will be more effective than hours of studying the morning of the exam.</p>
                <p><strong>Use the Right Materials</strong></p>
                <p>Review books like Princeton Review or Barron’s are helpful, but so are your class notes and past tests. Flashcards, summary sheets, and online resources like AP Classroom can reinforce key concepts.</p>
                <p><strong>Practice, Practice, Practice</strong></p>
                <p>Do full-length practice tests under timed conditions. This not only improves your stamina but also highlights weak spots. The most important part of making sure that you’ll perform well on your AP exams is if you practice a lot! Remember, the best form of studying is practicing and testing yourself.</p>
                <p><strong>Review Strategically</strong></p>
                <p>Don’t just reread—quiz yourself, explain concepts aloud, or teach a friend. Active recall strengthens memory far better than passive review. Passive review means simply reading the text and watching videos. Instead, actively test yourself by going through the questions again and again.</p>
                <p><strong>Take Care of Yourself</strong></p>
                <p>Sleep, eat well, and take breaks. A clear mind works better than a tired one.</p>
                <p>Remember, AP exams are challenging—but with the right approach, they’re also a chance to earn college credit and boost your confidence. Start now, stay consistent, and you’ll walk into test day ready to conquer.</p>
            `
    },
    {
        title: "Spiritual Thought",
        author: "Nicole Kuo",
        feature: null,
        date: "April 14, 2025",
        issue: 14,
        category: "Spiritual Thought",
        subcategory: ["Bible"],
        type: null,
        content: `
                <p>Today’s Bible verse:</p>
                <p>“If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness (1 John 1:19).”</p>
                <p>Sin is dirty and foul – it is the opposite of all things holy. We cannot be joined with Christ when we are covered in the stench of unrighteousness. Without a savior, we would always be covered in our sins. However, the blood of Jesus can wash away our sins if we confess and seek forgiveness.</p>
                <p>This holy cleansing only comes from His mercy – it cannot come from anything we do. No matter how good we try to be, we receive this gift of cleansing simply because he is faithful and just to forgive us when we confess our sins.</p>
                <p>Prayer:</p>
                <p>Dear God, you have welcomed sinners to your table and given us a place beside you only through your mercy and grace. You forgive us when we cannot forgive ourselves. We know it is only through the sacrifice your Son made that we are made clean of all our unrighteousness.</p>
                <p>Thank you for your faithfulness and love. Give us opportunities to share the truth of your faithfulness and forgiveness with those who need to hear it.</p>
                <p>In Jesus' name, Amen.</p>
            `
    },
    {
        title: "Gator Nation Falls to Wolfpack",
        author: "Samuel Teoh",
        feature: null,
        date: "April 14, 2025",
        issue: 14,
        category: "Intramurals",
        subcategory: ["Kickball", "Sports"],
        type: null,
        content: `
                <p>In the final kickball game of the season, Swarm and Blue Tang first faced off at Beitou Sports Center. Both Houses had yet to win a single Kickball game, with Blue Tang tying with Wolfpack, and Swarm losing both their games to the other two Houses. Going off on an incredible first run to start the game, Swarm ended the kickball game 7 - 4! </p>
                <p>In the second half of Intramurals, Wolfpack and Gator Nation faced off. Gator Nation, thus far undefeated in kickball season, going 2 - 0 against both Swarm and Blue Tang, fell at last to Wolfpack. With three Intramurals of kickball, dispersed throughout several interruptions, the season finally ended and students now look forward to the next sport: boys’ maxball and girls’ basketball!</p>
            `
    },
    {
        title: "Inside SA Life",
        author: "Chihoko Tanaka",
        feature: "Chihoko Tanaka",
        date: "March 28, 2025",
        issue: 13,
        category: "Feature",
        subcategory: ["Student"],
        type: "Cover",
        content: `
                <p><strong>SA Life: Behind the Scenes</strong></p>
                <p>Have you ever wondered what goes into planning the school's biggest events? Being an SA member isn't just about having the title. It's about bringing people together, creating memories, and learning skills for life.</p>
                <p>May: Welcome Back Preparation</p>
                <p>The first major event that we plan is the Welcoming Back Party! We plan ahead of time with games, themes, posters, and a countdown banner. We even create a promo video to hype it up. Getting tips from former SA members allows us to get used to the SA format.</p>
                <p>Summer: Test-Run Welcome Back Party</p>
                <p>Even during summer vacation, SA is busy! We test activities at school, finalize event plans, induct SA officers into their roles, and meet with Dr. Pheirim to ensure everything is on track.</p>
                <p>September: Shark Week & SA Day</p>
                <p>One of our engaging events, Shark Week, must be carefully planned. We begin with a proposal with the budget, prizes, and responsibilities. The SA Day proposal is created as well—selecting the location, activities, schedule, and budget.</p>
                <p>October: 1st Movie Night</p>
                <p>For Movie Night, we make it fun by selecting the perfect movie, selecting snacks, determining ticket costs, and making a reservation survey. At the end of the month, we start brainstorming ideas for the Thanksgiving Potluck, including activities, a talent show, and a theme for SA officers.</p>
                <p>November: Thanksgiving & Talent Show</p>
                <p>Thanksgiving preparations are in full swing by now. We finalize the talent show program, pick the MC, practice SA performances, and decorate 6F. We also schedule Live Healthfully Day, including the SA Shop and officer time slot sign-ups.</p>
                <p>January: 2nd Movie Night</p>
                <p>To fundraise for our banquet, we host a Movie Night! As SA officers, we choose films, organize snacks, and sell tickets. First, however—the proposal has to pass Adcom, the school’s administrative group composed of members like Dr. Pheirim and Mr. Hawkins.</p>
                <p>February: Shark Week and Banquet Countdown</p>
                <p>We brainstorm new Shark Week ideas, organize prizes, and make sure many of our ideas are not a repeat of the last four years. As Executive Vice President, I’m in charge of collecting house photos for house participation and developing the voting system.</p>
                <p>We film a Banquet Promo Video, practice the SA performance, and organize interesting surprises—including our Banquet King & Queen. Our MCs start training, and we finalize the activities.</p>
                <p>March: Fundraisers & SA Day</p>
                <p>The final stretch of the year involves organizing fundraising events and SA Day. Like all major events, this requires proposals, scheduling, budgeting, and teamwork.</p>
                <p>Why Join SA?</p>
                <p>You’re not just doing a repetitive job: you’re making school life more exciting for everyone. Yes, you would be busy. However, seeing your hard work turn into laughter, cheers, and unforgettable moments is an experience like no other. This experience is not only for your college applications; it’s lifelong learning. If you’re interested in being a part of SA, run for SA on April 30th!</p>
            `
    },
    {
        title: "We Can Be the Change",
        author: "Samuel Teoh",
        feature: "Ai-En Lin",
        date: "March 28, 2025",
        issue: 13,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
                <p>Plastic is a major part of our lives, but have you ever considered how microplastic particles affect our health? Growing up in Taiwan, I was surrounded by a culture that values global awareness and environmental responsibility.</p>
                <p>However, paradoxically, plastic waste infiltrates every corner of our lives, from supermarket packaging to cups and straws to Taiwan’s bubble tea culture.</p>
                <p>In Mr. Gene's environmental science class, I learned that microplastics accumulate in marine life and eventually enter our bodies through the food chain.</p>
                <p>Realizing the urgency of this issue, I co-founded an environmental organization called Bye-Bye Plastic Bags Taiwan, which is dedicated to raising awareness and promoting sustainable practices.</p>
                <p>We organized educational workshops, delivered speeches in elementary schools, and launched a social media campaign to inspire change. Over time, our efforts gained traction. More and more schools invited us to speak about plastic pollution.</p>
                <p>Furthermore, we also launched second-hand charity sales to promote sustainable living by donating 70% of proceeds to children in need, which helped us draw new supporters and expand our reach on social media.</p>
                <p>I often heard elders say, “Follow the path of those before you.” However, these experiences taught me a crucial lesson: age does not define our ability to make a difference; passion does. Instead of waiting for change, we can be the ones to make changes in our lives and others.</p>
            `
    },
    {
        title: "Sports at Lih-Jen",
        author: "Samuel Teoh",
        feature: null,
        date: "March 28, 2025",
        issue: 13,
        category: "School Updates",
        subcategory: ["Sports", "Interschool"],
        type: null,
        content: `
                <p>Our Primacy team had an unforgettable day at Lihjen International Private School on Monday, March 24th where the school hosted us and Alice Fong Yu Alternative School for a day of light-hearted competition in relay running, volleyball, and basketball.</p>
                <p>We started off the day with a great dance routine by our very own Miu, Joanna, and Larissa, which paved the way for the exciting games ahead.</p>
                <p>As the games commenced, all eyes were glued to the basketball court. We held our breath as there was a nail-biting game between boys from Lihjen and boys from San Francisco, followed by a thrilling game between the girls. The atmosphere was electric as players battled it out, showing off their skill and coordination.</p>
                <p>It was then the turn of our Primacy girls basketball team to take the court, and they did not disappoint. Led by Jolie and with strong support from Joanna, Ayu, Rebecca, and Larissa, our team dominated the game and achieved a well deserved win. Their determination and coordination were a joy to behold.</p>
                <p>The thrill continued in volleyball with Neilson lending his experience in volleyball to provide leadership, sets, and spikes. Shota’s spikes and digs were also central to Primacy taking the win. The last activity was the relay race, in which Leo bore the last turn with pace and drive, which brought us to the second place finish.</p>
                <p>There were teacher vs. student matches, where players from all the schools assembled into two teams, offering a chance for teachers and students to bond over friendly competition. The teacher teams did very well and won basketball and volleyball, but placed last in the relay race.</p>
                <p>We had such wonderful fun watching them form teams and compete; all of them had incredible fun. All the tough competition was set aside and replaced with exceptional sportsmanship and friendship that made it a special day.</p>
                <p>In the end, it was not entirely about the scores – it was about the memories we created, the sportsmanship we displayed, and the friendships we cemented. This sporting event was not just a chance to compete but also a time to learn, grow, and have fun. We cannot wait for the next one!</p>
            `
    },
    {
        title: "Care for Others Day",
        author: "Jude Chin",
        feature: null,
        date: "March 28, 2025",
        issue: 13,
        category: "School Updates",
        subcategory: ["Care for Others Day", "Pillar Day", "Community Service", "NHS"],
        type: null,
        content: `
                <p>On March 14th, students at Primacy participated in a meaningful event dedicated to showing care and kindness to others, especially those in need.</p>
                <p>The pillar day “Care for Others Day,” was a day of outreach, designed to bring joy and encouragement to the community, with a special focus on the patients at Taipei Adventist Hospital.</p>
                <p>The day began with a creative and heartfelt activity. In the morning, students gathered to make beautiful handmade flowers accompanied by uplifting greeting cards.</p>
                <p>The flowers and cards were crafted with care to spread joy, peace, and a message of hope. Students worked together to personalize the cards with messages that would brighten the day of those receiving them.</p>
                <p>In the afternoon, the students took their creations to the streets, starting with the MRT stations and continuing on foot through the bustling areas nearby.</p>
                <p>As they walked through the streets, they handed out flowers and cards to passersby, offering small moments of kindness to strangers. The smiles and reactions from the recipients were a testament to the impact of these small acts of care.</p>
                <p>The highlight of the day was the visit to Taipei Adventist Hospital. Students performed Christian songs and skits for the patients, providing both entertainment and a message of hope. The patients, many of whom were enduring difficult times, were deeply touched by the students' gestures of care and love.</p>
                <p>Through this event, Primacy students not only spread joy and encouragement but also learned the valuable lesson of giving back to the community. It was a day of service that left a lasting impact on everyone involved, reminding everyone that small acts of kindness can make a big difference in the lives of others.</p>
                <p>As everyone gathered together in front of the hospital for the final prayer, Care for Others Day came to an end with Primacy students grateful for the opportunity to share their love to the community around them.</p>
            `
    },
    {
        title: "Food Fair at TAAS",
        author: "William Lee",
        feature: null,
        date: "March 28, 2025",
        issue: 13,
        category: "School Updates",
        subcategory: ["Community Service", "Interschool"],
        type: null,
        image: null,
        content: `
                <p>Last Sunday, Primacy students were delighted to participate in the annual Food Fair of Taipei Adventist American School (TAAS). The festive event is a celebration of diversity, where parents of students from various countries prepare food, share culture, and strengthen community bonds. For Primacy, it was also an opportunity to represent our school and reach out to a broader audience.</p>
                <p>Among the many country booths featuring Taiwan, Japan, Korea, and more, our Primacy booth was a crowd-pleaser with its delicious quesadillas, which were a big sales hit. Zack, Andy, Chihoko, Reina, and Isaiah worked the booth well, serving up food and engaging with visitors. Students and parents also enjoyed the spinning wheel game, where prizes such as pens and backpacks could be won.</p>
                <p>This event was not just about food but about building connections. Our students had the chance to meet and interact with the TAAS community, strengthening relationships and promoting our school's presence. It was also a wonderful community service opportunity for students needing service hours, making the experience even more worthwhile.</p>
                <p>Additionally, it served as a heartfelt revisiting for some students who had graduated from TAAS, adding a nostalgic touch to the day. The day was filled with delicious food, and the joy of coming together. We look forward to participating again next year.</p>
            `
    },
    {
        title: "Spiritual Emphasis Week with Keith Detwieler",
        author: "Samuel Teoh",
        feature: null,
        date: "March 28, 2025",
        issue: 13,
        category: "School Updates",
        subcategory: ["Spiritual Emphasis Week", "Bible", "Guest Speaker"],
        type: null,
        image: null,
        content: `
                <p>Day 1:</p>
                <p>Students arrived on the sixth floor in the final period of the day and sat with their Houses. Primacy’s one and only band, starring Zack Chen and Lilian Chou singing, Jolie Lin on the piano, and Renee Wu with a guitar, played ‘Christ is Enough’ as the daily song. Then, Mr. Harper introduces the speaker of this semester’s SEW: Keith Detwieler.</p>
                <p>With a game to guess how many sunflower seeds were in a jar (1770!) as an icebreaker, Mr. Detwieler spoke about the importance of the choices we make every day. The conclusion: Sometimes the choices we make are difficult, but God has already chosen you. Will you choose God?</p>
                <p>To close out the day, the Bell Choir performed ‘Glorious Celebration’ as Monday’s Special Music. Students enjoyed the beautiful ringing of bells and the harmonious sounds of music. After the Bell Choir’s mesmerizing performance, Dr. Pheirim gave a rare announcement: For her leadership on Friday, shepherding back her House members during the Ultimate Distance Challenge, Ayu Ogura was awarded in front of the entire school. Congratulations Ayu!</p>
                <p>Day 2:</p>
                <p>Primacy’s band opened the second day of Spiritual Emphasis Week again with ‘Hosanna’. Mr. Detwieler opened the day’s theme, Science, on dopamine, the ‘feel good’ chemical, and how it can make us severely addicted to our cell phones. Similarly, mirror neurons and hypnosis are ways that information and bad habits can infiltrate our brains and our everyday lives.</p>
                <p>To close out the presentation, Mr. Detwieler led a fun and interactive game of ‘Would You Rather’. To conclude, when we make choices, we should think before we act because what we do unconsciously can greatly influence the way we think and act.</p>
                <p>Day 3:</p>
                <p>On the third day, the band opened with ‘Who You Say I Am’. The topic of the day: ‘Influence’. Mr. Detwieler spoke on the idea of social conformation, which was introduced through a hilarious video presentation. With numerous Bible verses and the question “If all your friends jumped off of a bridge, would you?”, Mr. Detwieler illustrated the idea of how easily we can be influenced by the people around us.</p>
                <p>In conclusion, we should be careful of the influences in our lives, whether it be the internet, our phones, or even the music we listen to. Finally, the Choir closed out the day with an entrancing and beautiful performance of ‘Undivided’.</p>
                <p>Day 4:</p>
                <p>On the fourth day, the band, with Jolie Lin and Zack Chen singing, Lilian Chou on the piano, and Renee Wu on the guitar, performed ‘The Power of Your Love’. Mr. Detwieler opened the presentation with a fun and interactive puzzle-piecing game with a three-minute time limit. Students learned that importance of time management and making sure that they were making the right choices with the amount of time that they have.</p>
                <p>In conclusion, some choices can govern the outcome of your life and it is important that you use every second and every minute of your day for the right thing, making the right decisions. Mr. Detwieler proposed a question to the students: Will you make the right choice today?</p>
                <p>Day 5:</p>
                <p>On the final day of SEW, we opened with two performances. The band performed ‘Christ is Enough’ again, calling back to their first song on Monday. Phoebe Lee and Samuel Teoh performed ‘In Jesus Name’ right after.</p>
                <p>To introduce the topic for the day, ‘Holiness’, Mr. Detwieler gave a demonstration of an iodine clock. The demonstration showed students how deceptive and innocent-looking sin is and how quickly it can pollute our minds. To conclude, Mr. Detwieler gave students the most important choice of all – to accept Jesus into our lives. All other choices will be right because of Jesus.</p>
            `
    },
    {
        title: "Studying for Exams",
        author: "Larissa Kuo",
        feature: null,
        date: "March 28, 2025",
        issue: 13,
        category: "School Updates",
        subcategory: ["Academics", "Exam"],
        type: null,
        image: null,
        content: `
                <p>Although we’ve only just finished our final exams for Quarter Three, Advanced Placement exams for students are coming up quickly in May and it is important to review the ways to study effectively to perform our best on these exams.</p>
                <p>Contrary to popular belief, the amount of time spent studying does not necessarily lead to high test scores and better performances. Instead, the key to great test-taking is effective preparation.</p>
                <p>Firstly, effective studying lies in a well-structured study schedule. Instead of diving straight into studying at Starbucks or cramming just the night before the exam, you should plan well ahead of time what the exam will cover and what points you should review.</p>
                <p>Secondly, you should create a dedicated study space that is quiet and comfortable, set only for reviewing and completing homework. If the study space is on your bed, it’s easy to get distracted or fall asleep. Instead, you should find a place where you can study without distractions and get work done.</p>
                <p>Thirdly, you should make sure that you take care of yourself and your well-being. Studying for exams can be stressful and time-consuming.</p>
                <p>Incorporating short breaks can help relieve stress and tension, as well as rewarding yourself with small snacks or drinks when you overcome a particular hurdle. Rewarding yourself will help boost your confidence and give you motivation to continue studying.</p>
                <p>Finally, don’t forget to seek help when you need it. Studying is not something that you must do on your own. Studying with friends allows you to ask for help when you need it, as well as gives your study time a level of fun and enjoyment. Good luck with your exams and don’t forget to take care of yourself!</p>
            `
    },
    {
        title: "Spiritual Thought",
        author: "Nicole Kuo",
        feature: null,
        date: "March 28, 2025",
        issue: 13,
        category: "Spiritual Thought",
        subcategory: ["Bible"],
        type: null,
        image: null,
        content: `
                <p>Today’s Bible verse:</p>
                <p>“Fret not thyself because of evildoers, neither be thou envious against the workers of iniquity (Psalms 37:1).”</p>
                <p>Often it is too easy to want what others have. Particularly when we see others who have built up wealth, comfort, and prestige through dishonest actions that have hurt others.</p>
                <p>God warns us to set aside such envy. When we covet the things that are attained by evil means, we open ourselves up to the temptation to follow their ways.</p>
                <p>Prayer:</p>
                <p>Father God, protect my heart from all envy and jealousy. Teach me to not dwell on the riches and comforts of evil men. Turn my attention to the riches of Your kingdom so that I may dwell on heavenly things. Help me to remember how richly blessed I am because of knowing You.</p>
                <p>In Jesus’ name, Amen.</p>
            `
    },
    {
        title: "Ultimate Distance",
        author: "Samuel Teoh",
        feature: null,
        date: "March 28, 2025",
        issue: 13,
        category: "Intramurals",
        subcategory: ["Distance Challenge"],
        type: null,
        content: `
                <p>On Friday, March 21th, the Ultimate Distance Challenge arrived. Instead of traveling to Beitou Sports Center to play Kickball, students walked together under the bridge and along the river. There, after checking in with Dr. Pheirim and Mrs. Corkum, students began running the trail along the river in a large circle.</p>
                <p>Several teachers and sponsors were stationed along the way, making sure that students were walking on the right path and encouraging them as they ran distance for their House. We can safely say that every student tried their best to push their House forward in the Ultimate Distance Challenge!</p>
            `
    },
    {
        title: "God's Timing",
        author: "Samuel Teoh",
        feature: "Mark Harper",
        date: "March 17, 2025",
        issue: 12,
        category: "Feature",
        subcategory: ["Teacher"],
        type: "Cover",
        content: `
            <p>New Year’s Eve came and went as I sat on the plane back to Taiwan. I felt sad and confused. Why hadn’t God answered my prayer? A year earlier, I had asked God to help me find a special person before the end of the year.</p>

            <p>I was convinced that He would do this and started the year with hope and confidence, believing that I would soon be spending time with someone special. However, as the year ended, I was still alone.</p>

            <p>I met many nice people throughout the year, but no one with whom I truly connected. I had put in maximum effort, to be sure. Still, even though I hadn’t found anyone, I kept up hope because I believed that God would help me.</p>

            <p>Finally, in December, I took a trip to the U.S. for Christmas. It was a nice trip, and I kept my eyes open at every opportunity because I knew time was short and the end of the year was fast approaching. Yet, still, no one could be found.</p>

            <p>My flight back to Taiwan was on December 30. Due to the time change, I would arrive back in Taiwan on January 1st.</p>

            <p>I thought to myself, “This is it! God will seat me next to a nice person on the flight back. We will talk and start our new relationship right there on the plane.”</p>

            <p>As I walked down the aisle to my seat, I couldn’t wait. Soon, my dreams were dashed as I saw that I would be spending the next 12 hours sitting next to a Taiwanese grandma.</p>

            <p>Maybe she would need to switch seats with someone, I hoped, but hours later, as midnight struck on New Year’s Eve, she was still sitting next to me.</p>

            <p>Back home from the flight, the sadness and confusion lingered. Had God forgotten about me? I sat down at the computer to check my email (at that time, my phone did not have internet access).</p>

            <p>To my surprise, there was an email from a girl I had messaged weeks before. She had finally written back! I quickly checked to see what time she had sent the email. It had been sent before New Year’s Eve! I immediately responded, and the next week, we went on our first date. The rest is history.</p>

            <p>God sometimes waits until the last minute, but He is always on time!</p>

        `
    },
    {
        title: "How I Became a Dad in Elementary School",
        author: "Samuel Teoh",
        feature: "Dino Wang",
        date: "March 17, 2025",
        issue: 12,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
            <p>When I was in elementary school, our family owned a golden retriever. When he passed away, I was very sad. My parents thought that we needed to get a new dog, both to comfort me and my brothers after the death of our golden retriever, and also because they wanted one themselves.</p>

            <p>Finally, my dad decided to get a French bulldog. I didn’t want her at first, because I thought that the breed of French bulldogs were ugly. But, because my dad insisted that he wanted to get a French bulldog, we kept her.</p>

            <p>At first, I didn’t like her very much because she would need to go to the toilet at random spots around the place and at the worst times. I would then have to clean up after her and it was always a hassle.</p>

            <p>She also liked to bite things and people, making it awkward for me when I invited others over.</p>

            <p>But as we spent more and more time together, I gradually grew to love her. Every time I came home, I would always see her running toward me to play with me. Whenever I see my dog, she will always make me feel warm and at home.</p>
        `
    },
    {
        title: "TJS Visit",
        author: "Jude Chin",
        feature: null,
        date: "March 17, 2025",
        issue: 12,
        category: "School Updates",
        subcategory: ["Science Fair", "Robotics", "Interschool"],
        type: null,
        content: `
            <p>Last week, students from Primacy had the exciting opportunity to visit the Taipei Japanese School for their annual science fair. The event was a fantastic exchange of knowledge, as our students not only observed a variety of creative experiments but also introduced our own projects, including the Primacy Robotics Club and Andy’s research on the anti-inflammatory effects and physicochemical properties of polysaccharides extracted from selected medicinal mushrooms.</p>

            <p>Andy’s experiment drew interest from both students and teachers, as he explained how medicinal mushrooms contain natural compounds that may help reduce inflammation. Meanwhile, the Primacy Robotics Club showcased its latest innovations, highlighting the importance of programming, engineering, and teamwork in building functional robots.</p>

            <p>One of the standout moments for our students was witnessing an impressive fireworks experiment conducted by Japanese ninth graders. Using magnesium, they created dazzling chemical reactions that mimicked miniature fireworks. Many of our students were fascinated by the precision and chemistry behind the project, gaining new inspiration for their own scientific explorations.</p>

            <p>The visit to the Taipei Japanese School was not only a chance to exchange ideas but also a reminder of how science connects students across different cultures. We look forward to future collaborations and discoveries together!</p>
        `
    },
    {
        title: "FULL POWER with Ernest Brake",
        author: "Samuel Teoh",
        feature: null,
        date: "March 17, 2025",
        issue: 12,
        category: "School Updates",
        subcategory: ["Guest Speaker", "Bible"],
        type: null,
        content: `
            <p>On Monday during chapel time, guest speaker Ernest Brake arrived on the sixth floor to give Primacy students an insightful and engaging talk on unlocking their true potential. The author of ‘The Full Power Plan’ began his speech with a story on his background during college.</p>

            <p>As he explained how he led his life without purpose, Mr. Brake explained to students that true joy and happiness are found when you find and use the hidden superpower that God has given you.</p>

            <p>Some questions that Mr. Brake prompted Primacy students to ask and answer themselves, including ‘Does a sense of purpose drive my daily activities?’ and ‘Have I had a positive impact on someone every day?’. These questions allowed students to determine whether they were living their lives to their true potential.</p>

            <p>The FULL POWER plan is as follows. ‘F’ stands for ‘Find Your Superpower’: identifying your strengths allows you to zero in on your higher purpose in life. ‘U’ stands for ‘Unleash Healthy Spirituality’: being aware that there is something beyond just yourself and the material world. The next two ‘L’s stand for ‘Lovify Your Life’ and ‘Launch Your Plan’ respectively: experience positive connections and apply that knowledge to your daily life.</p>

            <p>‘P’ stands for ‘Prioritize High-Octane Fuel’: eating healthy and high-quality foods for your body to run on. ‘O’ stands for ‘Omit What is Harmful’: Exchange short-term pleasures for long-term joys. ‘W’ and ‘E’ stand for ‘Water Up’ and ‘Exercise Outdoors’, both important for health and wellbeing. Last, but not least, ‘R’ stands for ‘Rest’: sleep well at night to repair your brain and body to optimize you for a life of FULL POWER!</p>

        `
    },
    {
        title: "Spiritual Thought",
        author: "Nicole Kuo",
        feature: null,
        date: "March 17, 2025",
        issue: 12,
        category: "Spiritual Thought",
        subcategory: ["Bible"],
        type: "Cover",
        content: `
            <p>Today’s Bible verse is:</p>

            <p>“Who was delivered for our offenses, and was raised again for our justification (Romans 4:25).”</p>

            <p>Christ Jesus was given up to suffering and death on a cruel Roman cross by God the Father in order that he might purge away our sins. He who had not offended at all died for the offenses of sinners, the Just for the unjust, that He might bring us to God.</p>

            <p>Christ, who so loved us enough to die, did not remain in the grave, but He rose victoriously that he might raise us also to spiritual life and justify us through faith.</p>

            <p><strong>Prayer:</strong></p>

            <p>We know, Lord, that we all offend in many points, but that your dear Son offended in none. In your wisdom, O Lord, you knew there was no other way but the cross that a people for your praise could be redeemed.</p>

            <p>We thank you for your great love to us, and we know that you who gave up your own Son for us and raised him up from the dead will also raise up us on the Day of Christ. Amen.</p>
        `
    },
    {
        title: "Gator Nation Continues a Winning Streak",
        author: "Samuel Teoh",
        feature: null,
        date: "March 17, 2025",
        issue: 12,
        category: "Intramurals",
        subcategory: ["Kickball", "Sports"],
        type: null,
        content: `
            <p>In the second kickball matchup of the season, Swarm and Gator Nation met for the first time. With Leo Li pitching the ball, and a plethora of astonishing catches and outs, Gator Nation took home victory. So far, they have yet to suffer a loss in Kickball. On the other side, Wolfpack and Blue Tang faced off in an intense competition. With key players on both Blue Tang and Wolfpack showing out, the kickball game ended in a tie and both took home a piece of the victory.</p>

            <p>Due to Care for Others Day, SEW, and spring break, the next Intramurals game (the last Kickball game of the season) will be on April 11th.</p>
        `
    },
    {
        title: "New Experiences at Primacy",
        author: "Samuel Teoh",
        feature: "Ann Chen",
        date: "March 3, 2025",
        issue: 11,
        category: "Feature",
        subcategory: ["Student"],
        type: "Cover",
        content: `
            <p>Before I came to Primacy, I attended a different international school for twelve years. Thus, transferring to a different school came with many changes and challenges. When I first came to this school, I was initially very nervous about one thing in particular – friendship. I was afraid that I wouldn’t make any friends or that I would be alone throughout high school. The first friend I made was Yuna, and after I began sitting with her, I started becoming more comfortable with everyone else.</p>
            <p>One of the biggest changes between my old school and Primacy was the difference in the attitudes of students here. In my old school, the students were loud during class and did not pay attention to their studies. However, at Primacy, I feel like the students are much more attentive and focused during class time. Although this is mostly a good thing, it puts pressure on me to pay attention as well, and the drastic shift was difficult to adapt to.</p>
            <p>The school environment also pushed me to learn more. In my old school, we learned more slowly and we learned less material overall. Here, at Primacy, the teachers continually push me to learn more, and the material can sometimes be difficult to understand, forcing me to try my hardest.</p>
            <p>Additionally, because the classes are smaller, teachers pay more attention to me individually as a student. Although this is generally a good thing, it also gives me a lot of pressure to perform well and not disappoint.</p>
            <p>Transferring to Primacy was filled with both challenges and changes. However, it gave me much room to grow in both my education as well as my personal life. I made new friends and pushed myself to learn new things – and in the end, it’s these new experiences that make me who I am today.</p>
        `
    },
    {
        title: "More Than Just Music",
        author: "William Lee",
        feature: "Jasmine Kuan",
        date: "March 3, 2025",
        issue: 11,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
            <p>I’ve been a part of the orchestra since second grade, playing the percussion, and it’s been an amazing journey that has shaped who I am today. Even though I get nervous before every single performance, I always look forward to the challenges and the joy of playing with my friends.</p>

            <p>The music isn’t just notes on a page—it’s about the memories, teamwork, and lessons I’ve learned along the way.</p>

            <p>One of my most embarrassing moments happened during a competition. I was so nervous, and in the middle of the performance, I made a huge mistake while playing the percussion! I was so shocked, but I kept playing and tried to stay focused.</p>

            <p>It wasn’t easy, but looking back, I realize it taught me a valuable lesson: even if you mess up, you have to keep going and learn from it.</p>

            <p>What keeps me in the orchestra, though, isn’t just the music—it’s the people and the experience. My family’s constant support has played a big part in keeping me motivated. I love the time I spend with my friends, practicing and performing together.</p>

            <p>There’s something special about the bond we share through our music. It’s not just about the performance; it’s about working with a team to achieve a goal, like when we won first place in a competition. The feeling of pride was indescribable—it felt like all our hard work and practice had paid off.</p>

            <p>Through orchestra, I’ve learned that mistakes are part of the process, but what’s important is how you keep going. Teamwork is essential, too. With so many people in the orchestra, everyone has to do their part to make the performance successful.</p>

            <p>It’s not just about individual talent; it’s about working together as a team to create something beautiful. The orchestra has taught me more than just how to play a percussion—it’s taught me about perseverance, teamwork, and the importance of staying calm under pressure.</p>

            <p>I’m proud of every piece we’ve played, and I wouldn’t trade the memories and lessons I’ve gained for anything.</p>
        `
    },
    {
        title: "My Ping Pong Journey",
        author: "Nicole Kuo",
        feature: "Nicole Kuo",
        date: "March 3, 2025",
        issue: 11,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
            <p>In fourth grade, I started playing table tennis, but it wasn’t for long. I quit when my brother laughed at me. As time went on, I turned 15 and moved back to Taiwan from America.</p>

            <p>At first, it was just a short two-week visit to my grandma’s funeral. My mom had done a health check because she felt like something was blocking her ear, and the result was shocking; it was something we never expected.</p>

            <p>The doctor told her she might have cancer and needed to undergo more tests to make sure it was cancer. That was only 3 days away from our flight back to America.</p>

            <p>She canceled our flight and we stayed since she was officially diagnosed with stage 4 nasal cancer.</p>

            <p>My school had to remove me because I had been gone from school for too long, so I didn’t finish 9th grade. Then I decided to take a break from academics because of my depression.</p>

            <p>At 16, I weighed 92 lb (40 kg) at 158 cm, sleeping all day and eating only one meal a day. My life changed one day when I searched for table tennis on the internet.</p>

            <p>I found a competition that would take place in Texas, USA. Because of my desire to return to the States, I told my mom I wanted to start playing table tennis and competing.</p>

            <p>I quit my part-time job at a boba shop to train in table tennis daily. During my first group training, I threw up from the physical training. It was very tough on my body at the time and often I felt like I might pass out during training. However, as I kept it up, I noticed changes in my body, such as weight gain and muscle growth.</p>

            <p>I gained more control over my own body. As months passed, my dedication to table tennis deepened. I pushed myself harder each day, adjusting to the intensity of training that once felt unbearable. My stamina improved, my reflexes sharpened, and I found a rhythm in the sport that I had never experienced before.</p>

            <p>Looking back, I realized that what started as a childhood hobby had become a lifeline. Table tennis not only rebuilt my body, but also restored my spirit. And though the journey wasn’t easy, it reminded me that strength isn’t just about physical endurance—it’s about resilience, about finding a reason to keep going, no matter how hard life gets.</p>
        `
    },
    {
        title: "228 Memorial Day",
        author: "Jude Chin",
        feature: null,
        date: "March 3, 2025",
        issue: 11,
        category: "School Updates",
        subcategory: ["Holiday"],
        type: null,
        content: `
            <p>February 28, known as 228 Memorial Day (二二八和平紀念日) in Taiwan, is a national holiday dedicated to remembering the 228 Incident, one of the most significant and tragic events in Taiwan’s modern history.</p>

            <p>The 228 Incident occurred in 1947 when tensions between the Taiwanese people and the Kuomintang (KMT) government escalated into a violent crackdown. It began with the beating of a cigarette vendor by government agents, triggering mass protests against the KMT’s harsh rule.</p>

            <p>In response, the government sent military forces to suppress the uprising, resulting in the deaths of thousands of Taiwanese civilians.</p>

            <p>The exact number of casualties remains uncertain, but estimates range from 10,000 to 30,000. This marked the beginning of the White Terror, a period of political suppression lasting for decades.</p>

            <p>Today, 228 Memorial Day is a time for reflection, with commemorations held across Taiwan, including ceremonies at the 228 Peace Memorial Park in Taipei. The government and civil society continue efforts to promote transitional justice and historical awareness. The 228 Incident remains a powerful reminder of the importance of human rights, democracy, and freedom, shaping Taiwan’s path toward becoming a democratic society.</p>
        `
    },
    {
        title: "Shark Week",
        author: "Samuel Teoh",
        feature: null,
        date: "March 3, 2025",
        issue: 11,
        category: "School Updates",
        subcategory: ["Shark Week", "SA Event"],
        type: null,
        content: `
            <p>The second Shark Week of the school year began on Monday, February 23, with Culture Day! Students arrived at school dressed to represent different cultures – various and diverse countries from around the world. Many students went above and beyond with their costumes, representing every country from India to Japan to France. The prize for Culture Day? Five cup noodles from various countries.</p>

            <p>The second day came quickly, with Pajama Day arriving on Tuesday. Many students came prepared and fully dressed. The entire school had fun watching students arrive at school in striped shirts and Hello Kitty pants. The prize for the best-dressed student on Pajama Day was a cute stuffed animal!</p>

            <p>On the third day, Superhero and Villain Day, students came to school dressed in their favorite superhero or antagonist costume. For the third day, there were two prizes given out – two movie tickets to a superhero movie!</p>

            <p>On the final day, students celebrated school pride with Primacy Color Day. Every student dressed in at least two of the three colors: gold, white, or navy blue. If every student and teacher from the House participated, the House would earn double points! Primacy Color Day was a half day, with the afternoon free for students to prepare for the final event of the week – the Primacy Banquet.</p>
        `
    },
    {
        title: "Banquet 2025 at Shangri-La",
        author: "Samuel Teoh",
        feature: null,
        date: "March 3, 2025",
        issue: 11,
        category: "School Updates",
        subcategory: ["Banquet", "SA Event"],
        type: null,
        content: `
            <p>At five-thirty on Friday, February 27, Primacy students arrived at Shangri-La Far Eastern Hotel fully dressed and prepared for the 2024–25 Banquet. Inspired by <em>The Great Gatsby</em>, the boys were aptly suited for the 1920s and the girls came in elaborate dresses with fancy headgear. Paired with a photo partner, students walked into the venue in pairs to take photos in a walk-in.</p>

            <p>Half an hour later, SA kicked off Banquet 2025 with a dance performance on stage – a fancy Charleston dance to emulate <em>The Great Gatsby</em> vibes. Mr. Ayomi gave a short Spiritual Thought, and the Choir welcomed everyone with a heavenly performance of “I Can Only Imagine.” With that, Banquet 2025 began as students lined up for a fancy buffet with delicious food.</p>

            <p>The first performance of the night after students took their first round of food was Cheryl Lee on the cello and Samuel Teoh on the piano – playing a piano-cello duet of “Lake Louise” by Yuhki Kuramoto. With both the deep baritone of the cello and the bright tones of the piano, the performance was captivating and immersive.</p>

            <p>Immediately after the strings performance, Larissa Kuo began the first game of the night – “Guess the Baby.” Over the past week, SA had been collecting baby photos from students and compiling them into a Kahoot game for everyone to enjoy. In an intense competition, Shota Fukumoto won first place, with Yuna Wu close in second and Mr. Gene not far behind in third. Everyone enjoyed seeing their classmates and teachers as babies and trying to find similarities!</p>

            <p>In a surprising turn of events, it was time for the teachers to shine! Dr. Pheirim took the spotlight at the center of the stage, with Mr. Ayomi, Mr. Van, and Mr. Shen accompanying her in a band. Students were immediately entranced by both the musical talent of their teachers and their principal’s clear and rich singing voice. Their rendition of “The Way I Am” by Ingrid Michaelson perfectly fit the chill and relaxed ambiance of the evening – and we can only hope for a return of the Teachers’ Performance next year.</p>

            <p>Then, the Ling Ling Band, consisting of Zack Chen and Lilian Chou as the lead singers, Jolie Lin on the piano, and Renee Wu on the guitar, took the stage. First the guitar, then the piano joined in, and the school’s one and only band sang “Can’t Help Falling in Love” by Elvis Presley to serenade the entire audience. With beautiful harmonies and a soothing rhythm, the Ling Ling Band reminded everyone of the power of music.</p>

            <p>Next, led by Joanna Tang and Samuel Teoh, the “Lyrics Game” began. Each table played as a team, listening carefully to guess which song was being read. With a mix of both old hits from the 1920s and trending songs, the “Lyrics Game” posed a challenge for everyone – but Isaiah Chieh took home the most correct guesses, leading his table to victory!</p>

            <p>The student with the highest vocal range arrived on stage – Phoebe Lee. Accompanied by Samuel Teoh on the piano, Phoebe performed “Se Tu Della Mia Morte.” With her clear and expressive voice, Phoebe captivated the entire audience and delivered a flawless performance.</p>

            <p>After Phoebe’s enrapturing performance, Jolie Lin led the “Fun Facts” game. Filled with questions like “How long has Da Hsu worked at Primacy?” (7 years) and “Who teaches the most subjects at school?” (Mr. Van), everyone had fun testing their knowledge of the school and their classmates. Cheryl Lee took home the trophy as the queen of Primacy Trivia!</p>

            <p>In the last performance of the night, the newly formed Drama Club took the stage. Led by Mr. Ayomi with his ingenious scriptwriting skills, the club featured Ayu Ogura, Cheryl Lee, Dino Wang, Enzo Wang, Hirotaka Chen, Lilian Chou, Samuel Teoh, and Yuna Wu. The audience laughed as the cast portrayed couples at a movie theatre, passing romantic gestures down the row of seats. The play kept everyone entertained, and we can’t wait to see what Drama Club does next!</p>

            <p>The Best Dressed Awards came next in a surprise announcement. Judged by Mrs. Jathrena and Dr. Pheirim, the awards for Best Dressed according to the 1920s theme drew large applause. Hirotaka Chen, in a dark blue suit and flat cap, won Best Dressed for the boys. Phoebe Lee, in a stunning golden dress and feathery headpiece, took home Best Dressed for the girls!</p>

            <p>Finally, what many students were waiting for arrived – Banquet King and Queen voting. With two students from each House already nominated from the previous week, excitement filled the room. When the results came in, the crowns went to Chiung Wu and Larissa Kuo as Banquet King and Queen! Both were crowned on stage to the entire school’s applause.</p>

            <p>The Primacy Banquet 2025 ended with students lining up to take pictures at the photo booth. Group after group entered and exited, with laughter and smiles all around. Everyone took home photos as keepsakes to remember this unforgettable night – perhaps the biggest event of the school year.</p>
        `
    },
    {
        title: "Spiritual Thought",
        author: "Nicole Kuo",
        feature: null,
        date: "March 3, 2025",
        issue: 11,
        category: "Spiritual Thought",
        subcategory: ["Bible"],
        type: null,
        content: `
            <p>Today’s Bible verse:</p>

            <p>“Rebuke not an elder, but intreat him as a father; and the younger men as brethren; (1 Timothy 5:1)”</p>

            <p>There are likely older believers in your life. Here, Paul tells Timothy not to rebuke his elders, but to come to them the way he would come to his father. Then, he tells Timothy to treat younger men as his brothers. Similarly, you can treat older believers in your life as you would a father or mother. Don't be harsh with them, but come with respect and humility. With younger believers, treat them as you would a sibling. Do not taunt or be rude to them. Do not act as though you are better than them. Rather, treat them with respect that you would want to receive from those who are older than you.</p>

            <p><strong>Prayer:</strong></p>

            <p>Heavenly Father, make me respectful and humble as I interact with those older and younger than me. If I see something in their life that needs correction, give me wisdom and humility to address it. Lead me by Your Holy Spirit, and do not let me do it on my own strength. Let me correct others because I love them and You, not for selfish gain. Thank You God that You correct me in love and not wrath. Let me correct and treat others how You treat me and how I would want to be treated. In Jesus' name. Amen.</p>
        `
    },
    {
        title: "A Coffee Date",
        author: "Nicole Kuo",
        feature: null,
        date: "March 3, 2025",
        issue: 11,
        category: "Extracurricular",
        subcategory: ["Poetry"],
        type: null,
        content: `
            <p>A gift, a small present no bigger than a palm, is neatly wrapped on the warm wooden table. The scent of freshly brewed coffee swarms the atmosphere between Ben and Aria. Their eyes melt into each other’s, their gaze is as sweet as the cup of sugar cubes placed next to their coffee cups.</p>

            <p><strong>Aria</strong><br>
            They say love is bitter,<br>
            As is coffee.<br>
            Yet nothing is better,<br>
            Then a cup infused with sugar.<br>
            Sweet to taste,<br>
            With the smell of harmonies<br>
            How bitter could love be,<br>
            If filled with sweet memories?<br>
            How cruel could he be,<br>
            If his gaze is so steady?<br>
            I think I may melt,<br>
            As sugar in coffee.<br>
            For his touch is so warm<br>
            And he says I’m so sweet.<br>
            I hope that he’s felt,<br>
            My poor heart of toffee<br>
            For my mind is a storm<br>
            Is love truly this sweet?</p>

            <p><strong>Ben</strong><br>
            My heart is loyal,<br>
            My love is royal.<br>
            Her eyes are unreal,<br>
            Her smiles are surreal.<br>
            Sugar is sweet, but so is honey.<br>
            One is familiar, steady, known,<br>
            The other—a floral, a seed that’s sown.<br>
            A gold that sticks, a touch unplanned,<br>
            A feeling I can’t quite withstand.<br>
            If love is sweet, then why is coffee bitter?<br>
            Why be bound to just one sweetener?<br>
            Two may be too rich, but sugar is not plenty<br>
            So why must love be solitary?</p>
        `
    },
    {
        title: "Kickball Returns From Hiatus",
        author: "Samuel Teoh",
        feature: null,
        date: "March 3, 2025",
        issue: 11,
        category: "Intramurals",
        subcategory: ["Sports", "Kickball"],
        type: null,
        content: `
            <p>On Friday, Primacy brought back a game that hasn’t been played for a very long time - kickball. Kickball is similar to baseball with its four bases, and yet, instead of hitting the ball with a bat, students will kick the ball into the field. With one week to practice, students overcame hurdles in figuring out how to play and the best strategy (which turned out to be tapping the ball instead of kicking the ball as hard as possible).</p>
            <p>In the first week of competition, Wolfpack faced off Swarm and Gator Nation fought against Blue Tang. In an incredible show of athleticism and strategy, Wolfpack and Gator Nation emerged victorious!</p>
        `
    },
    {
        title: "How I Met My Girlfriend",
        author: "Samuel Teoh",
        feature: "Chiung Wu",
        date: "February 17, 2025",
        issue: 10,
        category: "Feature",
        subcategory: ["Student"],
        type: "Cover",
        content: `
            <p>I first met my girlfriend in October 2024.</p>

            <p>Satoru and I had just finished our ELL class and were walking toward the MRT station to go home. When we entered the station, I looked behind several times and noticed that a boy and a girl were following us. At first, I found it strange and wondered if they knew who I was.</p>

            <p>Then, when we entered the metro, the boy walked up to me and informed me that my backpack was unzipped. We talked briefly about where we studied and exchanged Instagram handles. When I got home, the girl added me on Instagram, and I realized that we had many mutual friends.</p>

            <p>It turned out that she went to the same school I used to go to when I lived in Yilan. As we chatted online, we found out that we both loved cats and drawing.</p>

            <p>The second time I saw her in person, I visited her school for an art exhibition. After the exhibition, we often hung out together after my ELL class to draw at a coffee shop or finish homework.</p>

            <p>At night, she called me and we chatted for a while about schoolwork and what happened that day. Then, I asked her if I could be her boyfriend. She said yes, and that was how we met.</p>
        `
    },
    {
        title: "Becoming Who I Am",
        author: "Samuel Teoh",
        feature: "Taelyn Chen",
        date: "February 17, 2025",
        issue: 10,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
            <p>When I walked into an English-based school for the first time, I didn’t have the highest hopes. However, the first few months of high school were lovely; the only thing that marred it was my new photo on the student ID card.</p>

            <p>The friends I made proved my assumptions false. I realized that the environment here was very different from what I was used to. We were encouraged to raise our hands, speak up, and take initiative.</p>

            <p>The seniors were happy to be friendly towards newcomers like me. But how do you tell your friend that those seniors she looks up to aren’t going to be there for her when she needs help?</p>

            <p>In freshman year, I experienced what it’s like to be friends with someone whose mental health isn’t quite up to par. I had never seen the pain of an agitated mind in that way before.</p>

            <p>I learned a lot that year. The environment taught me how to put myself out there and be confident and comfortable: a skill I’d gotten close to, but had yet to master. Watching my friends slowly become victims of ostracization taught me what things I should keep to myself.</p>

            <p>A dispute between two close friends taught me to say no sometimes and be honest about what I’m doing.</p>

            <p>Most importantly, I learned that sometimes cutting off people who keep you from growing is necessary. It was my first time doing so, a step towards learning to set boundaries.</p>

            <p>My second year of high school was a lesson in who I am. Instead of trying to become close friends with everyone who came along, I joined a whole new friend group to drift away from some people whom I knew I didn’t want to become like.</p>

            <p>Jim Ron’s quote, “You're the average of the five people you spend the most time with,” affected my life. It impacted the music I listen to, my interests, and my outlook on life in general.</p>

            <p>I began to read again, and I started to listen to New Jeans. I was gentler with myself and the whole world around me. I learned to apply makeup, get my nails done, and slacked in class a little bit. Having someone I could talk about life with and have heartfelt conversations with made that year one of the happiest years of my life.</p>

            <p>Now it’s my last year, and I’ve got my own cozy little circle of friends. I’ve figured out what boundaries I’m comfortable with and even found myself a boy I love. I want to encourage you to put yourself out there. You’ll never enjoy high school if you only care about your grades and social status.</p>

            <p>Make friends with the new kid who’s got no one to sit with at lunch, say hi to the turtle in the lab, get on stage, and give it your all when there’s a song you know. As G.K. Chesterton put it, “If a thing is worth doing, it is worth doing badly,” so don’t be scared to fail, either.</p>
        `
    },
    {
        title: "A Journey in Art",
        author: "Jude Chin",
        feature: "Allen Jiang",
        date: "February 17, 2025",
        issue: 10,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
            <p>If my creative process were a journey, its starting point would likely be hidden in some distant and vague corner—perhaps it’s the imagination I had as a child, or maybe it’s a sudden spark of inspiration in the quiet of the night, or even a voice deep inside me that had never been discovered. I’ve always let the universe in my mind slowly unfold, observing its shapes, colors, and emotions, before using my hands to bring them into the real world. Every piece of art I create is more than just an expression; it’s a deep conversation with the world around me and with the inner self I continue to discover.</p>

            <p>In my work, characters often emerge—like Billy, the living moon, and others. They come from different universes, carrying their own stories, and make their way into my creations. Perhaps they are brave, perhaps lost, but no matter what, they are all searching for light. Their stories reflect my own journey of exploration, growth, and the search for answers through my art.</p>

            <p>Each piece of work I create represents a new journey. Sometimes, it’s a colorful, shining childhood memory; other times, it’s an adventure into the unknown, or sometimes it’s simply a way to bring to life those fiery images burning in my mind. To me, creating art is not just an expression but an ongoing connection—connecting with the world, with others, and with the self that continues to evolve.</p>
        `
    },
    {
        title: "Banquet Invitation",
        author: "Larissa Kuo",
        feature: null,
        date: "February 17, 2025",
        issue: 10,
        category: "School Updates",
        subcategory: ["Banquet", "SA Event"],
        type: null,
        content: `
            <p>Step into the roaring 20s at the Primacy 2025 Banquet, an evening of elegance inspired by The Great Gatsby. Join us on February 27th at 5:30 PM at the Shangri-La Hotel in Daan, Taipei, for a night filled with dazzling performances, fine dining, and timeless entertainment.</p>
            <p>With both a buffet of delicious food and a photo booth to snap pictures to keep your memories, the Primacy Banquet will be a night to be cherished.</p>
            <p>Dress to impress in your finest Gatsby attire and prepare to celebrate in the richness of the Jazz Age. Let’s raise a glass to the unforgettable spirit of the 1920s!</p>
        `
    },
    {
        title: "Spiritual Thought",
        author: "Nicole Kuo",
        feature: null,
        date: "February 17, 2025",
        issue: 10,
        category: "Spiritual Thought",
        subcategory: ["Bible"],
        type: null,
        content: `
            <p>Today’s Bible verse:</p>

            <p>“Therefore if thine enemy hunger, feed him; if he thirst, give him drink: for in so doing thou shalt heap coals of fire on his head (Romans 12:20).”</p>

            <p>It’s easy to provide food and comfort for our guests. And most of us have no trouble feeding needy strangers. But feeding an enemy in need? That sounds crazy.</p>

            <p>Yet, when we return kindness for evil, we pass on the burning coals that bring God’s warm and inviting love into his home and into his life. A little kindness done for God’s sake can have a life-changing impact.</p>

            <p><strong>Prayer:</strong></p>

            <p>Lord, when others oppose me, in my humanness, I desire to retaliate. Guide my actions, so that I do not repay evil for evil. Instead, empower me by the love that You poured out on me even when I was Your enemy, to pass on the warmth of Your kindness. And I pray that as I do, You would bring the light of Your love into the hearts and homes of others.</p>

            <p>In Jesus’ name, amen.</p>
        `
    },
    {
        title: "Decorating School for Chinese New Year",
        author: "Samuel Teoh",
        feature: null,
        date: "February 17, 2025",
        issue: 10,
        category: "School Updates",
        subcategory: ["Holiday", "Chinese New Year"],
        type: null,
        content: `
            <p>TPCA recently celebrated the Lunar New Year with excitement and joy! Each house came together to decorate the school with vibrant red lanterns, festive banners, and traditional Chinese Calligraphy of luck and prosperity.</p>
            <p>These decorations brighten up the elevator doors and reflect the rich culture and traditions of the Chinese New Year. With the celebrations just around the corner, TPCA is ready to welcome the new year in style!</p>
        `
    },
    {
        title: "Eagles Win at Primacy's First Superbowl Party",
        author: "Samuel Teoh",
        feature: null,
        date: "February 17, 2025",
        issue: 10,
        category: "School Updates",
        subcategory: ["Holiday", "Superbowl Party", "SA Event"],
        type: null,
        content: `
            <p>On February 10, Primacy students arrived at school in the early morning to watch the Super Bowl! Excited both to see the game and the commercials, as well as to skip the first and second period, students went up to the sixth floor to the delicious smell of breakfast being made by the SA members.</p>
            <p>To the cheers of some and the disappointment of others, the Eagles won the championship, and the party came to an end.</p>
        `
    },
    {
        title: "A Showdown in Singles Table Tennis",
        author: "Samuel Teoh",
        feature: null,
        date: "February 17, 2025",
        issue: 10,
        category: "Intramurals",
        subcategory: ["Sports", "Table Tennis", "Ping Pong"],
        type: null,
        content: `
            <p>On January 17th, our school officially brought back one of the most enjoyable sports before the long break, table tennis: doubles and singles. Table tennis is known for its fast-paced teamwork, quick reflexes, and strategic coordination between two players on each team. Partners must take turns hitting the ball, making communication and positioning essential for success. In mixed doubles, all the Houses, aside from Wolfpack, won two games and lost one.</p>
            <p>In the following weeks, students also competed in singles, as the strongest players from each House represented their House in a fierce competition. As the competition continued, House members who were not competing played on adjacent tables or ran for their House in the Distance Challenge.</p>
        `
    },
    {
        title: "Finding Myself",
        author: "Samuel Teoh",
        feature: "William Chang",
        date: "January 17, 2025",
        issue: 9,
        category: "Feature",
        subcategory: ["Student"],
        type: "Cover",
        content: `
            <p>Throughout middle school until now, I’ve never really fit in.</p>

            <p>Maybe it was because of my looks and hair, or maybe just because I was socially awkward and introverted, but I had almost no friends. Every time there was a history group project, I was always one of the last to be grouped because no one wanted to be in the same project as I was. In the end, I would be bunched in with other students who also had no other group to which they belonged.</p>

            <p>Since my main strength is English, during English group projects, I would be included in the popular groups, with everyone trying to claim me into their group. But during those times, I hated it because they didn’t actually like me or want to be friends with me – they were just using me to get a good grade on the project.</p>

            <p>As I went from middle school to high school, I tried to make more friends and tune myself to what the social norms were like. Attempting to become more socially friendly and interactive toward my classmates was to no avail, and I ultimately gave up. It was near the end of high school when I realized something important.</p>

            <p>Real love and friendship start with being yourself. When you try to act like someone else, you attract people who don’t really know the real you. These relationships will feel fake and won’t last. By being who you really are, you’ll find people who understand who you really are and will love you for you. This creates a stronger and more meaningful bond because it’s built on honesty and trust. It took some time for me, but I believe that if you just keep being who you are, the people who appreciate and understand you will eventually come.</p>
        `
    },
    {
        title: "New Beginnings",
        author: "Samuel Teoh",
        feature: "Cheryl Lee",
        date: "January 17, 2025",
        issue: 9,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
            <p>The middle school I attended had two classes – the regular class and the international class. Those who attended the international class were planning to study outside of Taiwan, and my family wanted me to study abroad. Because of my family’s wishes, I took the exam to enter my school’s international class.</p>

            <p>It’s challenging to get into the international class. Not only do you have to take a written English test and an interview, but you also have to have excellent grades at school. If your English isn’t up to their standards, you won’t be able to get into the international class, even if your grades are all A’s.</p>

            <p>The international class only accepts around three people per round, and there are a lot of applicants, so the chance of getting rejected is very high. When I was young, I knew some students who relied on connections and relationships to get into the class.</p>

            <p>I wanted to transfer to a different school, but my school refused to let me transfer. We thought about many ways to transfer to a different school so that I would be able to study abroad.</p>

            <p>We temporarily considered forging documents and pretending that I was studying in a high school abroad, but quickly tossed that idea. My mother said that the worst-case scenario was that I might have to continue the rest of my studies at the school.</p>

            <p>At that time, I was in a dilemma. One choice I had was to continue going to that school. I had to continue writing a lot of homework in every class, take lots of exams, and not get enough sleep. However, my friends were there (although, at the time, my friends and I were in different classes). On the other hand, I could choose to transfer, and my life would become a lot less stressful.</p>

            <p>My uncle called my mother because my uncle is a very cautious person. He hoped that I could finish the remaining semester and graduate successfully before transferring. I was very desperate when I heard this because I didn’t want to go back to that school. Life in that school without friends by my side was like a living hell.</p>

            <p>Then, a few days later, my mom found out that someone at TPCA had placed their student registration at a different school and was able to transfer successfully, and we thought that we could do the same. Finally, I successfully transferred.</p>
        `
    },
    {
        title: "Christmas Robotics",
        author: "Jude Chin",
        feature: null,
        date: "January 17, 2025",
        issue: 9,
        category: "School Updates",
        subcategory: ["Club", "Robotics", "Competition"],
        type: null,
        content: `
            <p>During the Christmas break, while most of us were enjoying the holiday season, the dedicated members of the Primacy Robotics Club were hard at work, competing in a prestigious VEX Signature Robotics Competition held at the Pacific American School in Hsinchu. Among 64 fiercely competitive teams, Primacy secured an impressive 40th place during the qualifiers, showcasing their technical skills and determination.</p>
            <p>In preparation for the event, the team had made an ambitious modification to their robot, adding an extra robotic arm designed to score additional points. However, this enhancement posed unforeseen challenges, as the added weight compromised the robot's overall efficiency and agility. After evaluating the situation mid-competition, the team decided to remove the arm, but the adjustments disrupted the robot’s performance in the later stages of the event.</p>
            <p>Now, with the signature event behind them, the team is channeling their focus and energy into preparing for their final competition in Taichung, where they aim to apply lessons learned and perform at their best. Additionally, the team has already begun brainstorming for next season’s game, using this experience as a foundation for growth and innovation. Their resilience and commitment to improvement exemplify the spirit of robotics and teamwork.</p>
        `
    },
    {
        title: "Embracing Friendship Through Volleyball",
        author: "William Lee",
        feature: "Jolie Lin",
        date: "January 17, 2025",
        issue: 9,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        format: "png",
        content: `
            <p>Recently, our school organized a mission trip to Malaysia to engage in meaningful community service. This amazing experience allowed us to connect with the local community and introduced us to so many wonderful people. One of the highlights of my trip was the chance to play volleyball with the students at their school, which became a truly unforgettable moment for me.</p>

            <p>Playing volleyball was particularly special because, at our school, we don’t have a proper court to enjoy this sport. That made the opportunity to play with the students at Goshen Adventist Secondary School feel even more meaningful. I will never forget the excitement of each serve, the cheers that filled the air, and the laughter we shared after every point.</p>

            <p>It was so much more than just a game; it was a way to build friendships and create memories that I will treasure forever.</p>

            <p>The entire trip was such an exciting adventure, full of learning, serving, and connecting with others. Every moment felt like a gift, and I found myself cherishing even the smallest experiences. This mission trip made me feel deeply grateful and eager to visit Malaysia again in the future.</p>

            <p>This journey also opened my eyes to how incredible it is to meet new people and share experiences with them. It showed me the beauty of forming connections and how they can bring so much joy to our lives. I look forward to the day I can return and experience more of this wonderful country, its people, and its culture.</p>

        `
    },
    {
        title: "Ping Pong Begins",
        author: "Samuel Teoh",
        feature: null,
        date: "January 17, 2025",
        issue: 9,
        category: "Intramurals",
        subcategory: ["Ping Pong", "Table Tennis", "Sports"],
        type: null,
        content: `
            <p>In the first Intramurals session of the second semester, students rallied for a practice session in table tennis or ping pong. In just a week, Primacy students would compete by House in mixed doubles, where boys and girls from each House would enter.</p>
            <p>As half of the school ran the Distance Challenge on the second floor and the other half practiced table tennis on their respective tables, the first Intramural of the year was lively and full of smiles. Breaking a sweat and exercising the body is one of the best ways to end the week!</p>
        `
    },
    {
        title: "Sabah Mission Trip",
        author: "William Lee",
        feature: "Zack Chen",
        date: "December 6, 2024",
        issue: 7,
        category: "Feature",
        subcategory: ["Student"],
        type: "Cover",
        content: `
            <p>Our mission trip to Malaysia was a tiring yet profound experience. In our five days in Sabah, we visited two schools, starting with Goshen Adventist Secondary School. We repainted the boys' dormitory at this school since the old paint was worn out and faded. Additionally, we dug holes to collect enough dirt to level the ground, which was necessary to build a clothing rack for the boys living in the dorm.</p>

            <p>We sang and taught the local students a song called <em>“Zan mei de hai zi zui xi le”</em> in three different languages and performed a Zumba dance. During the chapel service, we had the chance to listen to their school choir. Their harmonization was angelic and mesmerizing—it left my jaw on the floor. Jolie and I were so moved by their performances that we even cried.</p>

            <p>The second school we went to was Damai Primary School. At this school, we taught them the same Chinese song and engaged them in various fun activities, including “Fruit Basket” and “The Animal Game.”</p>

            <p>The kids were fully immersed in the activities and enjoyed them very much. Many of us even felt like celebrities during our visit, signing a lot of autographs and receiving endless hugs from the children. Overall, it was a fun and unforgettable experience. We did so much more than what I’ve shared here, but all the details will be revealed in an upcoming assembly.</p>

            <p>In conclusion, as someone who has participated in two mission trips, I strongly encourage all Primacy students to step out of their comfort zones and embrace new experiences. These trips have profoundly transformed my perspective on the world, helping me broaden my horizons and see life from a different angle. Rather than staying in the comfort of Taiwan, we should challenge ourselves to step up and help others to the best of our abilities. By doing so, we can gain a deeper understanding of the world and learn how to make a meaningful difference in the lives of others.</p>
        `
    },
    {
        title: "Facing My Fears",
        author: "Samuel Teoh",
        feature: "Rebecca Chen",
        date: "December 6, 2024",
        issue: 7,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
            <p>I hated the Taiwanese public school system and how I spent all my time taking tests. Public school drained my energy and I never really fit in with the rest of the students. I found myself surrounded by judgemental people and I continuously worried about what they thought of me. I could never truly be myself and, in the end, had a difficult time finding sincere friends.</p>

            <p>So I moved to Canada.</p>

            <p>Canada was the opposite of what I’d experienced in Taiwan. I felt much freer and comfortable and able to express myself and my feelings to the people around me without feeling like I was being judged. School helped me actually enjoy learning because my classmates and teachers cared about what I had to say and my opinions, instead of simply getting the answers correct. I made friends, too, which was awesome. And I love snow.</p>

            <p>Why did I come back to Taiwan? After spending a year in Canada, I realized that there were still things I cared about here. I missed my friends, my cat, and my family. I missed the convenience of everything being two minutes away.</p>

            <p>Although I was afraid of being left out again, not being able to fit in, and everyone I knew being in older grades than I was, I faced my fears and will continue to do so, because I don’t want to run away anymore.</p>
        `
    },
    {
        title: "Shocking Boxing Match at Primacy's Thanksgiving Party",
        author: "Samuel Teoh",
        feature: null,
        date: "December 6, 2024",
        issue: 7,
        category: "School Updates",
        subcategory: ["Holiday", "Thanksgiving", "Talent Show", "Giving Tree", "SA Event"],
        type: null,
        content: `
            <p>Primacy’s Thanksgiving event started with a worship song, ‘One Way’, to kick it off, with Zack Chen and Jolie Lin leading the worship. After this, the SA Members danced to ‘Don’t You Worry’ by the Black-Eyed Peas.</p>

            <p>Then, a short introduction by Jolie Lin to what Thanksgiving is. Her presentation showed us how the first Thanksgiving came about and what giving thanks truly looks like.</p>

            <p>Next came the event everyone had been practicing for and anticipating, the Talent Show. Organized by the SA Officers, students signed up for the Talent Show to compete for prizes and fame, with each having a chance to display their talents and showcase their various abilities.</p>

            <p>Some of the highlights include Lilian Chou’s performance with ‘The Fruits’ (Ai-En Lin, Dino Wang, and Isaiah Chieh), where they danced to William Lee and Samuel Teoh singing ‘Xiao Pin Guo’ (‘Little Apple’).</p>

            <p>Another powerful performance was the Japanese group, where Japanese students in the school got together and performed a synchronized dance that is traditionally performed during sports events. A mixture of thundering beats and dancing displayed their long preparation as well as the cultural significance of the dance.</p>

            <p>One of the most shocking and unique shows was the boxing match between Ayu Ogura and Mr. Shen - never have we seen a student punching a teacher! With both creativity involved in the voiceovers of their inner thoughts, an introduction video to hype up the performance, as well as the entertainment displayed as Ayu threw punch after punch at Mr. Shen, the performance was invigorating and a great way to end the Talent Show. Last but not least, the winner of the Talent Show was Hirotaka Chen. Hirotaka’s extraordinary performance consisted of a balance between talent and entertainment. His violin-playing skills were displayed while he danced to popular Zumba dances that most people at school are familiar with.</p>

            <p>After the Talent Show, the school celebrated with its traditional Giving Tree. Students take a piece of paper from the tree that contains the name of a child and a gift they would like to receive for Christmas. Then, after the Giving Tree, students began eating! Everyone brought a dish, and the lunch festivities began. Students ate and chatted, having fun with their friends, and sat around the sixth floor. All in all, the Thanksgiving event was a success and a wonderful time of celebration and gratitude.</p>
        `
    },
    {
        title: "My Singing Adventure",
        author: "Samuel Teoh",
        feature: "Phoebe Lee",
        date: "December 6, 2024",
        issue: 7,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        format: "webp",
        content: `
            <p>When I was a child, my mom loved K-pop. She played many songs from different groups, and since I listened to them so often, I started to sing along. Over time, I realized I really enjoyed singing, and my voice wasn’t bad. An idea came to mind: maybe I could become a singer?</p>

            <p>I started looking for ways to improve my singing, even taking singing courses at some companies. Unexpectedly, I got opportunities to shoot advertisements, which wasn’t part of my plan. Later, when I was in kindergarten, my mom let me join the Taipei HuaShin Children’s Choir when I was in grade two. The choir often performed, and we even had the chance to perform at the National Concert Hall.</p>

            <p>Unfortunately, I had to stop attending the choir during COVID-19, which made me sad for a while. However, when I was in grade eight, I joined another choir, the Taipei Philharmonic Youth & Children’s Choir (TPYCC). We also had many performances, including twice at the National Concert Hall. In total, I’ve performed there five times.</p>

            <p>I’m very proud of myself for having the ability to perform on such a big stage. Although I perform as part of a team, I always enjoy being on stage. Later, I began learning vocals and participating in many competitions – I even won first place a few times.</p>

            <p>Every time I go on stage, I feel nervous because the judges are very professional, and many competitors are listening to me sing. If I make even a tiny mistake, it can be embarrassing. Additionally, many people who learn vocal music know my name and how well I perform, which adds pressure. But, on the flip side, I also know their name and how well they performed.</p>

            <p>During the competitions, my teacher often asked me to record others’ performances. For this reason, I knew others were recording me too, which made me feel awkward. Next time when I compete, I hope to push past my insecurities and ignore what other people think to get a good placement!</p>
        `
    },
    {
        title: "Robotics Competition at TAS",
        author: "Jude Chin",
        feature: null,
        date: "December 6, 2024",
        issue: 7,
        category: "School Updates",
        subcategory: ["Robotics", "Competition", "Club", "Interschool"],
        type: null,
        content: `
            <p>The Robotics Club took part in their first competition of the 2024-2025 season on November 17th at Taipei American School. Despite facing challenges due to limited preparation time, we gave it our all and put forth our best effort. Our goal for this initial event was to gain valuable experience and identify areas for improvement in future competitions.</p>

            <p>During the event, the we focused on observing the designs and strategies of other teams. While doing so, we played a defensive role, assisting our partner team and learning from the dynamics of the matches.</p>

            <p>The Robotics Club is gearing up to return to TAS this week with a fully upgraded robot, now enhanced by a newly purchased pneumatics kit designed for advanced functions.</p>

            <p>In preparation, the team has dedicated countless hours to refining our designs and improving our strategies. Members have shown extraordinary commitment, working diligently during early mornings, after-school hours, and even sacrificing our Thanksgiving break to ensure the robot performs at its best in the upcoming competition.</p>
        `
    },
    {
        title: "Magical Colors",
        author: "Samuel Teoh",
        feature: "Allen Jiang",
        date: "December 6, 2024",
        issue: 7,
        category: "Feature",
        subcategory: ["Student", "Competition"],
        type: "Secondary",
        format: "png",
        content: `
            <p>Many students have talents in art and drawing, but Allen Jiang, a sophomore from Swarm House, took his artistic talents a step further and competed in the 2024 International Children and Youth Drawing Competition. With thousands of contestants, Allen won the Gold Award in not one but two themes – ‘Childlike Dreams’ and ‘Magical Colors’! Allen’s two award-winning pieces are displayed below, as well as an introduction he wrote to his pieces (originally Chinese, translated into English).</p>

            <p>A Buddha statue deep in the sea,</p>
            <p>I sit alone on it quietly.</p>
            <p>With just a spark of imagination,</p>
            <p>I managed to take a breath in suspension.</p>
            <p>Though it lacked all explanation,</p>
            <p>Somehow, I achieved this sensation.</p>
            <p>A touch of rhyme comes to be,</p>
            <p>In the deep ocean of my memory.</p>
            <p>Hidden there lies a museum, vast and grand,</p>
            <p>Once you enter, you’ll misunderstand—</p>
            <p>For there’s no way to leave the space,</p>
            <p>Because I can’t wake from this place.</p>
        `
    },
    {
        title: "Hana Sato, Swarm's Dodgeball MVP",
        author: "Samuel Teoh",
        feature: null,
        date: "December 6, 2024",
        issue: 7,
        category: "Intramurals",
        subcategory: ["Dodgeball", "Sports"],
        type: null,
        content: `
            <p>Primacy dodgeball began on Friday with Gator Nation versus Wolfpack and Swarm versus Blue Tang. In the game of Gator Nation versus Wolfpack, Leo Li showed up as the dominant player. Gator Nation pulled a decisive win against Wolfpack, knocking out their players one by one and waiting out the rest of the game.</p>

            <p>Swarm versus Blue Tang was a full Korean drama with its nerve-racking plot twists. As Shota Fukumoto, with his powerful arm and incredible speed, knocked player after player out of the game, it looked like the end for Swarm. However, with just four players left, Hana Sato caught a ball that flew her way.</p>

            <p>Swarm erupted into cheers as Mr. Ayomi walked back into the game. Within a few seconds, however, Mr. Ayomi was hit out of the game again and, this time, it seemed like it was actually over for Swarm. Then, the tables turned – Hana caught another ball!</p>

            <p>As Swarm players slowly returned to their team, each of Blue Tang’s members was gradually taken out of the game, and the Swarm rose triumphantly with a hard-earned victory. The MVP of the game – Hana Sato!</p>

            <p>With the semester about to end, the House Distance Challenge results show how much progress each House and student has made running during Intramurals.</p>

            <p>Every House has run well over two hundred kilometers, with most of the Houses over three hundred. A special shoutout goes to Andy Tu, who has outrun any of the other students with an incredible eighty-four kilometers!</p>
        `
    },
    {
        title: "Pushing Toward Growth",
        author: "Samuel Teoh",
        feature: "Ashim Pheirim",
        date: "December 17, 2024",
        issue: 8,
        category: "Feature",
        subcategory: ["Teacher"],
        type: "Cover",
        content: `
            <p>"What shall I talk about?" I asked our Primacy Times Managing Editor when he invited me to be interviewed for this final newsletter of the year. Suggested topics included why I chose to become the principal (not much of a story there), or my hobbies (something tells me knitting scarves and hats isn't exactly riveting content).</p>

            <p>Two questions did get my attention: "Why did you come to Taiwan?" and "What's one life lesson you learned?" Now we're talking.</p>

            <p>It was almost 18 years ago (most of you were non-existent) that I came to Taipei to teach high school English. It took nearly two years to sort out my paperwork because getting a work permit as an Indian to teach English wasn't easy.</p>

            <p>When I finally made it out here, I was told on my first day at work, "You know, because you are Indian, you have to work harder, much more than an American would, to prove yourself to be a capable English teacher."</p>

            <p>I was taken aback. I could have taken it as an insult or racial discrimination and been totally offended. Instead, I thought, "Hmm. Okay. Watch me." Did I work harder than my American colleagues? Not really; they were extremely dedicated teachers. But I did work hard, and it wasn't because I wanted to outperform them. See, I was insecure. It was my first teaching gig at an American high school, and I wanted so badly to do justice to my role.</p>

            <p>That comment drove me to always give my best... or at least very close to my best. I didn't need to prove anyone wrong; I needed to prove myself right, even when my insecurities whispered otherwise. I guess it paid off because when the time to choose directors for brand new educational projects came up, my boss chose me to head one of them, setting me off on a trajectory of other opportunities.</p>

            <p>That comment on my very first day of work in a new environment could have made me angry or discouraged, but I chose to let it push me toward growth.</p>

            <p>I've since had many other experiences. I took a solo trip to Kenya to cross "real safari in Africa" off my bucket list, even when people said it was too dangerous. One of my best trips ever! I did the Sun Moon Lake Marathon, 29 kilometers around that lake... twice. I even completed a full 42-kilometer marathon.</p>

            <p>I led two student mission trips to one of the most rural villages in India, amazing experiences for all who went. So many stories, not enough newsletter space.</p>

            <p>The life lesson? Instead of letting expectations and/or doubts of others feel like a heavy weight, I can turn them into fuel to prove to myself what I'm capable of. It's how I respond to a challenge that makes all the difference.</p>

            <p>And here's one final, unrelated life tip: Never eat beetroot salad or soupy curry noodles with metal chopsticks while wearing white. If you know, you know.</p>
        `
    },
    {
        title: "Musical Pursuits",
        author: "Samuel Teoh",
        feature: "Steffi Tsai",
        date: "December 17, 2024",
        issue: 8,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
            <p>This is an autobiographical story of my pursuit in my music career:</p>

            <p>There was once a child named Ezra. His parents had great expectations of him, so they sent him to music classes. His first instrument was the piano, which he did not find appealing, but it provided a fundamental foundation for his musical sense.</p>

            <p>Ezra’s family loved to travel, especially traveling outside the country. He once saw a street performer playing an instrument in Luzern, Switzerland. At that time, he did not know what instrument it was, but it definitely caught his eye. He told his dad that he wanted to learn that instrument. His dad agreed, but he had one condition.</p>

            <p>He said to Ezra, “You must promise me that you will be fully committed to learning this instrument. This instrument isn’t as easy to start off as the piano.” Ezra was determined to learn the instrument, so he agreed. He eventually learned that the instrument was called “the violin”, and little did he know that this single agreement would possibly affect his whole life.</p>

            <p>True to his promise, Ezra dove into violin lessons. The beginning was tough. Unlike the piano, where you just press down the keys, the violin requires extreme precision to press the strings in tune and absolute control in handling the bow smoothly, and is adaptable to any type of context in music. It was a struggle, but with a gifted trait of absolute pitch and effective practice, Ezra became an exceptional violinist.</p>

            <p>A few years later, Ezra joined several music camps abroad, where his talent and dedication shone brightly. Teachers acknowledged his expressive playing, and seniors often remarked on his unique ability to produce such amazing tunes. The encouragement he received filled him with confidence, inspiring him to aim even higher.</p>

            <p>Determined to chase his dream, Ezra decided to take a bold leap and apply to a music academy in England. The application process was tough, involving recorded performances, interviews, and essays about his musical journey. After weeks of anxious waiting, the email arrived: Ezra had been accepted. He was full of happiness and gratitude—this was the moment he had been striving for.</p>

            <p>Would it be a happily ever after? Unfortunately, this story is based on true events, so no.</p>

            <p>Just as Ezra’s dreams were just one step away, the world was hit by a global pandemic. The borders closed, schools shut down, and life as everyone knew it came to a halt. The music academy sent an update: all in-person classes were postponed, and students were advised to remain at home.</p>

            <p>At first, Ezra was crushed. He had worked so hard and dedicated so many hours to perfecting his playing, and now it felt as though all his effort was useless. He felt true disappointment.</p>

            <p>But one day, while scrolling through videos of musicians performing from their homes, he realized something: music is not limited to a specific place. It lived wherever there was someone to play with it. Therefore, Ezra adapted to the new reality instead of going to England. He attended online classes, connected with teachers virtually, and joined international competitions that had moved online. Though it was not the experience he had envisioned, it still gave him the opportunity to shine.</p>

            <p>In the end, Ezra learned that his journey was not defined by a single moment or place but by his ability to persevere and find new paths when the old ones were blocked. The dream of studying abroad remained, but he discovered that music was not just about where he played—it was about the story he told through every note.</p>

            <p>With the same determination he had when he first picked up the violin, Ezra continued his pursuit, knowing that no matter what challenges came his way, music would always be with him.</p>
        `
    },
    {
        title: "Love for Music",
        author: "Samuel Teoh",
        feature: "Hinako Tai",
        date: "December 17, 2024",
        issue: 8,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
            <p>Throughout my lifetime, I’ve moved to several different countries.</p>

            <p>Every time I moved to a new place, I encountered cultural differences and language barriers. However, every time I’ve been saved by music.</p>

            <p>I started becoming more attached to music when I was a fifth grader. During that time, my father continuously listened to pop music, from which my love for music grew. I was especially interested in the drums, which made the songs sound fuller and more gorgeous. I soon picked up the drums and have been playing them ever since.</p>

            <p>When I moved to different countries and met people from there, although I was unfamiliar with their culture and language, I was able to make connections with them through my love for music.</p>

            <p>However, as I discussed music and participated in musical events with my bandmates, I realized that not only were my English skills improving, but the relationships I had with people from vastly different cultures were growing stronger as well.</p>

            <p>Due to the connections I’ve made with others through music, homesickness has not plagued me for a while now!</p>

            <p>At the time, my English skills were so dreadful that I could not even order at a restaurant. Because of my English level, when I joined the brass, marching, and jazz bands, all I was capable of doing was reading the music sheets and playing the drums, which I felt quite embarrassed about.</p>

            <p>My life is surrounded by music all the time. I love Korean pop, which is extremely helpful to me for starting new conversations with others and finding new friends – especially with strangers. To tell you the truth, the first question I asked most of my now-friends at Primacy was “Do you like K-pop?”.</p>

            <p>Although I’m comfortable with the Chinese language now, in the first two semesters I enrolled at Primacy, I had a hard time understanding the conversations between my classmates. Because of this, I originally thought that it would be difficult to build a connection with them. However, I’ve now realized that K-pop and music can cross over any cultural or language barrier. I’ll always be thankful for the friends and relationships that have sprung from my love for music.</p>
        `
    },
    {
        title: "A Festive Christmas Reception",
        author: "Samuel Teoh",
        feature: null,
        date: "December 17, 2024",
        issue: 8,
        category: "School Updates",
        subcategory: ["Holiday", "Christmas", "Christmas Party", "SA Event"],
        type: null,
        content: `
            <p>With less than two weeks until Christmas Day, every House was preparing its respective floors with lively decorations and lights. On Thursday, Primacy students arrived at school wearing Christmas colors and ready to show their Christmas spirits. Classes flew by and students decorated their House floors, but it was only until six in the evening that the Christmas Reception truly began. The sixth floor, decorated by the Textile Arts class, had paper snowflakes hanging from the ceiling and Christmas trees along the walls. Parents, students, and guests sat around tables as the Bell Choir started off the night with ‘Carol of the Bells’.</p>

            <p>Then, a tour of the freshly decorated House floors. Starting from Swarm on the fifth floor, the judges, accompanied by many of the students and teachers, walked down the floors and admired both the creativity and beauty of what the building had transformed into. No matter the results of the competition, each House did a phenomenal job of encouraging the Christmas vibe at school.</p>

            <p>Dinner then took place, with tables of delicious food, drinks, and desserts. Parents and guests, followed by students, took their plates to their tables. While eating their food, students were also able to enjoy live music performances as well as games.</p>

            <p>To start, from the Guitar class, Zack Chen and Jolie Lin performed ‘It’s Beginning to Look A Lot Like Christmas’, kickstarting the Christmas feeling. Then, Jolie, accompanied by Lilian Chou and Joanna Tang, performed ‘Kid at Christmas’. The Choir class performed two Christmas songs, displaying incredible vocal and musical talent.</p>

            <p>Several more events on the stage followed. Mr. Hawkins led a lively Kahoot game testing the audience’s knowledge of the history of Christmas and fun facts – do you know what fruit is traditionally put inside Christmas stockings? It was Mr. Van Schoonevald who won the game in first place as ‘Mr. Roboto’! Zack and Larissa Kuo led ‘Guess the Christmas Song’, creating friendly competition between the Bible classes to test their musical knowledge.</p>

            <p>Finally, what many students were waiting for finally arrived – the revealing of their Secret Santa. The Secret Santa game, arranged by the Student Association, had been going on for two weeks, with students incredibly curious as to who their mystery gift-giver is. Group by group, students lined up in front of the stage and closed their eyes. Their Secret Santas quietly stood behind them, holding their final gift. When it came time to turn around, many students were pleasantly surprised, with laughter and smiles filling the sixth floor.</p>

            <p>The night ended with too many events to count. Hinako Tai gave a realistic and inspiring account of the Sabah Mission Trip. The MVP of the mission trip was awarded to Chiung Wu for his leadership and engagement with the children at Sabah. Lilian Chou and Samuel Teoh performed ‘Under the Tree’ by Ed Sheeran. Several of the teachers, in the final event of the night, acted out a skit, explaining that the true spirit of Christmas is not found in relaxing without any homework or participating in a barrage of activities, but with the people you love, appreciating what you have.</p>
        `
    },
    {
        title: "Semester Reflection",
        author: "Samuel Teoh",
        feature: null,
        date: "December 17, 2024",
        issue: 8,
        category: "School Updates",
        subcategory: ["Reflection"],
        type: null,
        format: "png",
        content: `
            <p>With now over eight issues published since September 13th, The Primacy Times has established itself as the school’s official, consistent newsletter. From Lilian Chou on dating advice in the first issue, to interviewing Dr. Pheirim in our last issue of the year, we’ve now featured articles or interviewed over half of the students at school!</p>

            <p>Perhaps one of the largest changes at school has been the new phone policy that has been implemented. It has not been appreciated enough how smooth the transition into the phone ban was. Although all policies come with costs, we can see the benefits of the new normal and how much the school has changed.</p>

            <p>Shark Week, ending with SA Day at Leofoo Village, is also a memory worth smiling over. Students and teachers dressed up to match the theme for each day of the week, winning points for their House. Everyone will remember the House chants at Leofoo Village – we already know who’s the best.</p>

            <p>With numerous records broken, Live Healthfully Day was both a pleasant break from academics as well as an exhausting day for those competing. This year, we added the Long Jump and the Shot Put to the activities, expanding the range for which students could display their athletic abilities.</p>

            <p>Primacy’s first Talent Show in history was organized by the SA Officers. In the weeks leading up to the Thanksgiving party, more than half of the school prepared for their parts, to not only win monetary prizes, but fame and recognition as well. The winner of the show was Hirotaka Chen, who shocked the entire school with incredible Zumba footwork while also playing the violin.</p>

            <p>The mission trip to Sabah, Malaysia, was also one of the most memorable experiences for participating students. Painting the walls, dancing Zumba on the stage, and creating new friendships with the students there - the Sabah Mission Trip is one that none of the students will forget.</p>

            <p>Now at the halfway mark of the school year, we can look forward to next semester with excitement and anticipation for what lies ahead – the relationships we foster with our friends and the memories we will create together.</p>
        `
    },
    {
        title: "Gator Nation Secures 3-0 Dodgeball Dominance",
        author: "Samuel Teoh",
        feature: null,
        date: "December 17, 2024",
        issue: 8,
        category: "Intramurals",
        subcategory: ["Dodgeball", "Sports"],
        type: null,
        content: `
            <p>In the final Intramural of the year, as well as the last week of dodgeball season, Blue Tang and Wolfpack faced off as the first contenders. Although Wolfpack had an early advantage, Blue Tang quickly returned and slowly struck out Wolfpack, one by one. With minutes still left to go, Blue Tang arose victorious against Wolfpack, bringing their dodgeball season to a 2-1 record.</p>

            <p>Swarm, starting with nine players, fought Gator Nation in the last game of the year. Both teams were undefeated thus far, but Gator Nation soon showed themselves to be the dominant House in dodgeball. A combination of powerful shots from Gator Nation secured their win, finalizing their 3-0 run.</p>

            <p>Another surprising turn of events happened on Friday afternoon as students from Swarm worked together and collectively ran over eighty kilometers, with Ayu Ogura leading her House with fourteen! With an incredible display of how much a House can achieve if everyone works together, Swarm overtook Wolfpack to become second place in the Distance Challenge!</p>
        `
    },
    {
        title: "Inspire by Dance",
        author: "William Lee",
        feature: "Miu Yoshii",
        date: "November 26, 2024",
        issue: 6,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
            <p>Dancing has always been something that caught my attention, the way it brings people together, and lets you express yourself without words. But for a long time, I never imagined it could become such a big part of my life.</p>

            <p>My journey began back in junior high at my previous school. One day, I saw a performance by the school’s dance club. Their energy, confidence, and teamwork were mesmerizing. I couldn’t take my eyes off them. At that moment, I thought, I want to feel that thrill. I want to dance like that.</p>

            <p>So, I decided to join the dance club. At first, I was excited, but reality hit me faster than I thought. —I wasn’t good at dancing. Memorizing the moves seemed to be impossible, and I struggled to keep up with my teammates. I’d never been good at sports, so I figured dancing wasn’t something I could get better at. Slowly, I started skipping practices and wondered if I should just quit altogether.</p>

            <p>Then, COVID-19 turned everything upside down. When the schools went online, we couldn’t practice together anymore. Our dance lessons shifted to online sessions, which made it even harder to stay motivated. Still, we were required to send practice videos to our group chat, and my mom wouldn’t let me give up. She let me practice in our basement, watching me closely to make sure I didn’t get loose. I’ll say that it was frustrating at first. But as time went on, I began to see progress, little by little.</p>

            <p>Eventually, we had an online audition where we sent our practice videos to the coach. He selected the top dancers for a virtual performance. To my surprise, I was chosen as one of the five members, and I couldn’t believe it! That moment changed everything for me, it was when I truly fell in love with dancing.</p>

            <p>When we returned to normal school, I discovered how much I loved practicing with my team. The teamwork, the laughter, and the shared struggles created memories that went beyond dancing. My teammates became some of my closest friends. Even now, though many of them have moved to different countries, we still stay in touch, and I’m sure that they hold special place in my heart.</p>

            <p>Dancing has taught me so many things. It showed me the importance of patience and also to know that it’s okay to start small and improve over time.</p>

            <p>While I don’t have a coach at the moment, I’m still going to keep growing and learning as a dancer. For me, dancing isn’t just a hobby—it’s a journey that has shaped who I am and continues to inspire me every day.</p>
        `
    },
    {
        title: "Movie Night",
        author: "Nicole Kuo",
        feature: null,
        date: "November 26, 2024",
        issue: 6,
        category: "School Updates",
        subcategory: ["Movie Night", "SA Event"],
        type: null,
        format: "png",
        content: `
            <p>Movie Night was hosted by Primary SA Officers on Saturday, October 26th and was an evening of entertainment, popcorn, and great company!</p>

            <p>Movie Night featured four exciting movies, catering to different tastes and age groups. On the 5th floor, room 505 came alive with Jurassic World, where dinosaur fans of all ages gathered to experience thrilling adventures in a world of prehistoric creatures. The action-packed movie was a hit with everyone who enjoys heart-pounding moments and epic special effects.</p>

            <p>Meanwhile, on the 6th floor, the laughter echoed as Despicable Me 4 took the spotlight. This beloved animated movie brought joy to kids and teenagers, with the mischievous Minions providing plenty of laughs and heartwarming moments.</p>

            <p>The colorful characters and fun storyline were the perfect way to relax and enjoy a family-friendly film. The event was a huge success, and it was heartwarming to see so many of our school community come together to enjoy a fun evening. A big thank you to Primacy SA Officers for organizing such a memorable evening!</p>

            <p>We hope to see you at our next gathering. Stay tuned for more exciting activities!</p>
        `
    },
    {
        title: "A New Robotics Season",
        author: "Jude Chin",
        feature: null,
        date: "November 26, 2024",
        issue: 6,
        category: "School Updates",
        subcategory: ["Club", "Robotics"],
        type: null,
        content: `
            <p>The Primacy Robotics team has been tirelessly working since August to prepare for this year’s VEX High Stakes competition. The team is made up of Andy, Jude, Ayu, Hirotaka, Chihoko, and Steffi. They dedicate over four hours each week to practice and even stayed as late as 11 p.m. the night before their first competition in November!</p>

            <p>This year’s game requires teams to stack rings into goals on the field to earn points. To succeed, robots must be designed to drive, pick up rings, and toss them onto the goals with precision and speed.</p>

            <p>Andy believes that building robots provides valuable STEM education. “We’re not just assembling robots to prepare for tasks like tightening shaft collars in the future—it’s about applying an engineering design and problem-solving approach. This mindset mirrors the thinking used by rocket scientists, brain surgeons, and inventors around the globe.”</p>
        `
    },
    {
        title: "Live Healthfully Day",
        author: "Samuel Teoh",
        feature: null,
        date: "November 26, 2024",
        issue: 6,
        category: "School Updates",
        subcategory: ["Live Healthfully Day", "Pillar Day"],
        type: null,
        content: `
            <p>The second Pillar Day of the school year, Live Healthfully, came on Sunday, November 10th. Cloudy yet not rainy, it was the perfect weather for an outdoor sports competition and a display of athleticism. The day kicked off with a lively warmup from the Zumba class.</p>

            <p>The energetic beats set the tone for the rest of Live Healthfully Day as the boys warmed up for the hundred-meter dash. Leo Li broke ahead of all the runners, coming in first in the dash with 11.93 seconds. The rest of the runs came in one by one – Joanna Tang won the girls’ 100-meter and Jolie Lin won most of the girls’ races.</p>

            <p>One new addition to the Live Healthfully Day activity list was the long jump, where two boys and two girls from each House attempted three long jumps into the sand pit. From Swarm, Chiung Wu rose out on top with the farthest jump of 4.28 meters. While students were competing in the long jump, others were playing the shot put for their house. Both Ayu Ogura and Shota Fukumoto broke their respective previous records by at least 3 meters, displaying their incredible athleticism.</p>

            <p>Futsal, similar to soccer or football, was also one of the most popular competitions. Blue Tang dominated the field, with Shota Fukumoto and William Lee pulling together the team, winning first place against Gator Nation.</p>

            <p>In Tug of War, Blue Tang beat all the other houses again, coming out on top, taking the most house points for Live Healthfully Day.</p>
        `
    },
    {
        title: "Spiritual Thought",
        author: "Nicole Kuo",
        feature: null,
        date: "November 26, 2024",
        issue: 6,
        category: "Spiritual Thought",
        subcategory: ["Bible"],
        type: null,
        content: `
            <p>Today’s Bible verse is, “For all these things do the nations of the world seek after: and your Father knoweth that ye have need of these things (KJV Luke 12:30).”</p>

            <p>Our Creator knows our hearts; He knows all our hopes and dreams. He understands what will make us happy by bringing comfort and peace to our lives compared to what will devastate us. God is much wiser than we are, and since He recognizes the difference between what we want and what we need, He knows how to bless us. Sometimes we become upset when we do not get our way, and we must remember that God knows our hearts better than we do. He loves us and makes sure we have what we need without unnecessary distraction.</p>

            <p><strong>Prayer:</strong> Dear Lord, You are our Master and Creator. You know our hearts better than we do, and we thank You for providing what we need and not what will cause us harm. In Jesus’ Name, Amen.</p>
        `
    },
    {
        title: "Overcoming Fear",
        author: "Samuel Teoh",
        feature: "Hirotaka Chen",
        date: "November 8, 2024",
        issue: 5,
        category: "Feature",
        subcategory: ["Student"],
        type: "Cover",
        content: `
            <p>Ever since I was a kid, I hated engineering. In middle school, I took a class where we had to work on radios, but I lacked the skills to make semiconductors. My fingers were calloused and I frequently burned my hands, leaving me feeling frustrated. The engineering teacher would walk around and say, “Why are you so slow at making the radio while other students are almost done? What is wrong with you?” Those harsh words pierced my already weakened confidence, and I resented the teacher because of it.</p>

            <p>Those experiences planted a seed of trauma in me, and I began loathing engineering, swerving away from any contact with it. However, I later realized that my hatred wasn’t because of the way my teacher was upset with me; it stemmed from my disappointment in my lack of skills.</p>

            <p>In my second year at Primacy, Mr. Van sponsored a robotics club. Even though my friend Kei strongly encouraged me to join, memories of my past trauma resurfaced. I doubted myself and feared that I would make the same mistakes, disrupting the team’s progress.</p>

            <p>As time passed, however, I decided to challenge myself. In my senior year, I joined the robotics club, despite my uncertainties. In the club, I quickly noticed that there was no need to worry about being isolated due to poor performance. Everyone was warm, collaborative, and supportive, which helped dissolve my anxiety and nervousness.</p>

            <p>While working with my teammates, we faced challenges, such as struggling to figure out how to attach the intake parts to the drive train at the right angle so that the ring would drop onto the stake. We worked tirelessly – before class, during lunch, after school, and even on weekends – to solve the problem.</p>

            <p>This experience in the robotics club has transformed my view of engineering. I now enjoy building robots, even though it requires significant effort, time, and patience, especially given that I had no prior experience with robotics. I hope our team, Banana United, can win the VEX competition once more.</p>
        `
    },
    {
        title: "My School Journey",
        author: "Samuel Teoh",
        feature: "Hana Sato",
        date: "November 8, 2024",
        issue: 5,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
            <p>My school life has been a unique journey across four different schools, each shaping who I am today in distinct ways. It began with a challenging entrance exam to enter a girls’ kindergarten in Japan. We call it ‘ojuken’ in Japanese.</p>

            <p>This entrance exam was not limited to the children – it involved the parents as well. My parents joined in the selection process, supporting me at every step. My kindergarten strictly monitored the children’s attitudes toward learning and discipline in actions. It may seem strange to you, but I felt that it was a good opportunity for me to train to be nice to others.</p>

            <p>From kindergarten, I continued my education in an ultra-strict, all-girls Japanese elementary school. Every day, I took the train to school alone, bowing and saying ‘gokigen-yo’ to my teachers and superiors. ‘Gokigen-yo’ means ‘fare thee well’ – I felt like I’d become a medieval aristocrat.</p>

            <p>However, everything changed in fourth grade when my family moved to Indonesia. I entered the first international school I’d been to in my life, where classes were taught entirely in English.</p>

            <p>The sudden language barrier was an enormous challenge for me. I still remember my third day at school, struggling to understand the English reading assignment, and ending up in tears as I walked home.</p>

            <p>But as I pushed forward, continuing to study and putting in the effort to understand the classes, I gradually began to catch up with my classmates. Within a few months, I loved school and enjoyed hanging out with my friends during classes. I still keep in touch with my friends there, occasionally meeting up in Japan and Taiwan during vacation.</p>

            <p>When I turned twelve, I decided I wanted to return to Japan to get into a prestigious, private middle school. To pass the entrance exams, I attended an Indonesian cram school almost every day to study for the test. It was one of the most arduous periods of my life.</p>

            <p>Every single day, there was a test, a lesson, several pages of homework, and then another test – it was a never-ending cycle. When I found out I’d passed the entrance exam and was accepted into the middle school in Tokyo, I screamed in joy (and when my family found out, they screamed as well).</p>

            <p>My journey did not end there. At the end of my first year in high school, I moved to Taiwan and joined Primacy. This journey through diverse education settings has given me invaluable insights into both my own culture and those around the world.</p>
        `
    },
    {
        title: "Waseda Visits Primacy",
        author: "Nicole Kuo",
        feature: null,
        date: "November 8, 2024",
        issue: 5,
        category: "School Updates",
        subcategory: ["College Fair", "College"],
        type: null,
        content: `
            <p>On Friday, Waseda University visited Primacy, introducing the university and encouraging students to apply. Primacy students walked up to the sixth floor to hear an informative talk on the various aspects of Waseda, from campus life to application tips. Waseda University in Tokyo, Japan, is renowned for its broad academic offerings and support for international students, making it a popular choice for students worldwide.</p>

            <p>It provides a range of undergraduate and graduate programs across disciplines such as political science, economics, science and engineering, international liberal studies, and more. For students interested in programs taught in English, Waseda offers an English-based undergraduate program, which covers major fields like economics, political science, and the sciences​​.</p>

            <p>For housing, Waseda has several student dormitory options. The Waseda International Student House (WISH) provides an immersive environment with its Social Intelligence (SI) programs, which foster cultural exchange and personal growth. Other dormitories, like the Higashi-Fukushima Student Dormitory, offer affordable single and twin rooms. Additionally, Waseda has partnerships with private housing companies to provide more options for students needing accommodations.</p>
        `
    },
    {
        title: "SEW: Mr. Harper on 'Crush'",
        author: "Samuel Teoh",
        feature: null,
        date: "November 8, 2024",
        issue: 5,
        category: "School Updates",
        subcategory: ["Spiritual Emphasis Week", "Bible"],
        type: null,
        content: `
            <p>Students at Primacy recently celebrated a memorable Spiritual Emphasis Week hosted by the one and only Mr. Harper. The surprising theme: ‘Crush’.</p>

            <p>Mr. Harper gave realistic and practical Christian advice and perspectives on romantic attraction, faith, and relationships. Primacy students learned the Relationship Attachment Model, that you should always know a person more than you trust them, and that your level of commitment in a relationship should always be higher than your level of touch.</p>

            <p>Mr. Harper also shared personal anecdotes from Bible verses and offered advice on how to maintain boundaries and show respect in relationships. From his relatable and hilarious stories, students learned that not everything they want will necessarily make them as happy as they think it will. The goal was to create a space where students could openly reflect on their emotions and ask questions within a faith-based context.</p>

            <p>The week concluded on a heartwarming note, with Mr. Ayomi announcing that he and Ms. Jathrena are expecting, which added a personal, joyous touch to the week's lessons on love and relationships.</p>
        `
    },
    {
        title: "What I Fight For",
        author: "Samuel Teoh",
        feature: "Ayu Ogura",
        date: "November 8, 2024",
        issue: 5,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
            <p>Boxing was the first sport I truly committed to for several years. My initial curiosity about mixed martial arts led me to boxing. Throughout my years of training, boxing has taught me many valuable skills, not just in athletics, but also in self-discipline and resilience.</p>

            <p>However, in recent years, whenever I trained for competitions, I struggled with the high standards and expectations I placed on myself. Although the training wasn’t always enjoyable – especially when I failed to see improvement in myself – I continued pushing myself, which ultimately motivated me to compete.</p>

            <p>My primary focus shifted to winning, and winning only. While that desire kept me enduring through tough training sessions and eventually led to victories, I began to lose sight of why I started boxing in the first place.</p>

            <p>As a result, my motivation waned, and I trained less and less, leading me to start thinking it might be too late to return to my previous training routine.</p>

            <p>Eventually, I remembered why I started boxing in the first place. I genuinely enjoyed the sport: the thrill of exchanging punches with an opponent, the satisfaction of improving my skills, and even the challenges I faced during training.</p>

            <p>I realized I liked every aspect of boxing, both the fun and the trials. My love for boxing – this is what I fight for now. In July, I will compete against an international boxer. This time, I hope to stay committed to my training and aim for a good result with a renewed mindset.</p>
        `
    },
    {
        title: "Spiritual Thought",
        author: "Nicole Kuo",
        feature: null,
        date: "November 8, 2024",
        issue: 5,
        category: "Spiritual Thought",
        subcategory: ["Bible"],
        type: null,
        content: `
            <p>Today’s Bible verse is, “But he giveth more grace. Wherefore he saith, God resisteth the proud, but giveth grace unto the humble (KJV James 4:6).” God extends unearned grace to us consistently. We hold our heads high as we attempt to live a Christian lifestyle, forsaking the sinful nature we despise. Unfortunately, we stumble daily. We covet others’ belongings as we scroll through social media, and we allow bitterness a stronghold when we don't get our egos and bare our souls to the Lord with honesty and humility. He will continue to grant grace when we repent with a genuine heart.</p>

            <p><strong>Prayer:</strong><br>
            Dear God,<br>
            We do not deserve forgiveness. We come to You and ask forgiveness with humble hearts this day. In Jesus’ name,<br>
            Amen.</p>

            <p><strong>Vocabulary:</strong></p>
            <ul>
            <li><strong>Resisteth:</strong> To withstand the action or effect of resisting.</li>
            <li><strong>Stronghold:</strong> Fortified place, such as a castle or a fort.</li>
            <li><strong>Covet:</strong> To have an unhealthy desire for something that belongs to someone else, and to do anything to get it.</li>
            </ul>
        `
    },
    {
        title: "Swarm Dominates in Badminton",
        author: "Samuel Teoh",
        feature: null,
        date: "November 8, 2024",
        issue: 5,
        category: "Intramurals",
        subcategory: ["Sports", "Badminton"],
        type: null,
        content: `
            <p>Primacy Intramurals start off with the Houses competing in badminton! Students who were not competing played badminton casually on the fifth floor. Students who were competing arrived at the second floor, with the boys starting first, and then the girls. Those walking the Distance Challenge watched excitedly from above, cheering on their classmates as they fought for the victory. Swarm pulled a decisive victory over Blue Tang, winning both the boys’ and girls’ games, showing their dominance in badminton. Gator Nation and Wolfpack won one game each, winning thirty points for their House!</p>
        `
    },
    {
        title: "Fall Hits: October & November New Releases",
        author: "Jude Chin",
        feature: null,
        date: "November 8, 2024",
        issue: 5,
        category: "Extracurricular",
        subcategory: ["Music"],
        type: null,
        content: `
            <p>October and November has been a standout month packed with epic comebacks in both American pop and K-pop. These chart-topping hits have racked up incredible views, captivating fans worldwide. From infectious beats to stunning visuals, here are the biggest releases dominating the internet right now!</p>

            <p><strong>"Birds of a Feather"</strong> is a song by Billie Eilish. Eilish first previewed the song on May 13, 2024, through a teaser trailer for the upcoming third season of the Netflix series <em>Heartstopper</em>. The song explores themes of deep love and a desire for lasting connection.</p>

            <p><strong>"UP"</strong> is a song by Karina from Aespa's digital single album <em>Synk: Parallel Line</em>. The group debuted new solo songs for the opening night of their concert tour, with each member performing solo songs they had written. Karina performed second with the hip-hop dance song "Up," for which she wrote all the lyrics.</p>

            <p>With the release of the two singles <strong>“CLICK CLAK”</strong> and <strong>“DRIP”</strong>, BABYMONSTER showcases their ambition for global success through a multifaceted approach to language and genre. “CLICK CLAK” features an English rap style that highlights the group’s talented vocalists’ ability to deliver impressive verses, while “DRIP” combines elements of dance music, hip-hop, EDM, and powerful pop into a dynamic K-pop track.</p>
        `
    },
    {
        title: "Curiosity",
        author: "Samuel Teoh",
        feature: "Andy Tu",
        date: "October 25, 2024",
        issue: 4,
        category: "Feature",
        subcategory: ["Student"],
        type: "Cover",
        content: `
            <p>A colossal boulder sat stubborn and immovable as my friends and a group of younger kids tried to unearth it, using tree branches to loosen the dirt surrounding the colossal monstrosity. For days, we tried everything, but the rock wouldn’t budge.</p>

            <p>As I observed our futile efforts, an idea occurred to me—what if we applied a fundamental principle of physics? Recalling Archimedes' words—"Give me a place to stand and I will move the world", I grabbed a large stick, wedged it under the rock, and used it as a lever. To everyone’s amazement, the rock lifted.</p>

            <p>Since that moment of harnessing natural power, my curiosity has grown stronger. When I came to Primacy in 9th grade, I joined the Science Club, a space where wild experiments happened—from igniting green fire to melting plastic bottle caps as a method of recycling material.</p>

            <p>I took AP® Biology in 10th grade, a course so intriguing that it drove me to study the biological sciences. A year later, my Science club and I hosted the Science Bowl (the predecessor of the Knowledge Bowl) on Develop Wisdom Day, contributing an additional game variable to improve the unpredictable and tense nature of the house competition.</p>

            <p>Last summer at National Taiwan University, I studied the biochemistry of two fungi species: by extracting compounds from mushroom samples, I could feed the substance to cancer cells and analyze their anti-cancer and anti-inflammatory properties.</p>

            <p>Science is not just about what’s written in textbooks—it’s about understanding the mechanisms behind everyday phenomena and using that knowledge to solve real-world problems. For me, science is an ongoing adventure—one where curiosity leads the way and the possibilities for discovery are endless.</p>
        `
    },
    {
        title: "How We Met",
        author: "Samuel Teoh",
        feature: "Irene Hsin",
        date: "October 25, 2024",
        issue: 4,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
            <p>My story with Isaiah began when I joined Student Association in my junior year as the Historian. Through our regular trips to Costco to stock up on chips and drinks for the SA store and weekly Monday meetings, I would spend lots of time with SA members, in particular, Isaiah. After a Monday meeting, I stayed behind to chat with him and found out that he lived in the same area as I did. From then, we started going home together – at first, the commute home was awkward, but it slowly developed into a casual and easy friendship.</p>

            <p>I found myself spending more and more time with him, especially because we were in many of the same classes together and were in the same grade. Sometimes, we would hang out on the weekends or after school to eat dinner. During a Thanksgiving event, we performed a skit together. Mr. Ayomi wrote the script, and, in it, I played a character who had developed a crush on Isaiah.</p>

            <p>One day, he asked me if I wanted to go to Xi-Men Ding with him – I said yes, and we watched a movie together. After that, we walked to a park, sat down, and talked for a long time. Out of nowhere, he asked me questions about whether I had a crush in school or not. I didn’t answer him directly, asking him whether he had a crush in school.</p>

            <p>It went back and forth until he said that he liked me and asked if I could be his girlfriend. I said yes, and that is how we got together.</p>
        `
    },
    {
        title: "Develop Wisdom Day and Knowledge Bowl by Andy Tu",
        author: "Samuel Teoh",
        feature: null,
        date: "October 25, 2024",
        issue: 4,
        category: "School Updates",
        subcategory: ["Pillar Day", "Develop Wisdom Day", "Field Trip"],
        type: null,
        content: `
            <p><strong>Knowledge Bowl hosted by Andy Tu</strong></p>
            <p>On the 10th of October, students and teachers at Primacy celebrated Develop Wisdom Day with the first event being hosted by Andy Tu – the Knowledge Bowl. Comprising five subjects (math, science, history, geography, and pop culture), the Knowledge Bowl was exciting and intellectually stimulating to all the students who participated and cheered their fellow House members on. The Knowledge Bowl ended with Swarm celebrating their victory with their proud House chant on stage.</p>

            <p><strong>Field Trip to Science Museum</strong></p>
            <p>In the afternoon, students gathered into their respective houses to walk to the National Taiwan Science Education Center. Traveling from floor to floor in the museum, students read the descriptions of each exhibition thoroughly to learn more about everything from women in the STEM field to the horns of a rhinoceros. Everyone had fun creating introduction videos for each of the exhibitions to earn points for their House.</p>

        `
    },
    {
        title: "Food with Jude",
        author: "Jude Chin",
        feature: null,
        date: "October 25, 2024",
        issue: 4,
        category: "Extracurricular",
        subcategory: ["Food"],
        type: null,
        content: `
            <p>Who says healthy food tastes bad? Gonna is a health-focused restaurant that specializes in Mediterranean cuisine and whole foods. It incorporates the popular "fast slow food" concept from Europe, the U.S., and Australia, offering healthy and delicious fast slow meals.</p>
            <p>The restaurant carefully selects seasonal ingredients, colorful vegetables, and the finest meats, all handcrafted from start to finish. It offers super nutritious salad bowls, grain energy bowls, and brunch options, allowing customers to freely enjoy quality meat and vegetables every day.</p>
            <p>The menu has a wide variety of choices, including healthy meal boxes, low-GI, high-protein, fitness meals, superfoods, brunch, salads, pasta, burgers, paninis, coffee, desserts, juices, and smoothies.</p>
            <p>Originally opened in the Daan district of Taipei, this has proved so popular that it’s since expanded and now has three city branches.</p>

        `
    },
    {
        title: "Spiritual Emphasis Week",
        author: "Michael Brannaka",
        feature: null,
        date: "October 25, 2024",
        issue: 4,
        category: "School Updates",
        subcategory: ["Spiritual Emphasis Week", "Bible"],
        type: null,
        content: `
            <p>Crush is the theme for the fall Spiritual Emphasis Week, and each message has been centered around a different aspect of relationships. Relationships are an important topic for teens and adolescents as they try to figure out friendships and sometimes dating. Mr. Mark Harper, science teacher at Primacy, has been giving students great advice each day and focusing on how much God wants a relationship with us. We’ve also been blessed with excellent musical performances by students each day. </p>
        `
    },
    {
        title: "Blue Tang Pulls Ahead in Distance Challenge",
        author: "Samuel Teoh",
        feature: null,
        date: "October 25, 2024",
        issue: 4,
        category: "Intramurals",
        subcategory: ["Sports", "Distance Challenge", "Badminton"],
        type: null,
        content: `
            <p>The era of basketball ended, and badminton began, to the excitement of many students, but without competition between houses. Arriving on the fifth floor, students divided into their houses and had fun playing badminton casually. Because there was no competition, there are no scores yet, but results will arrive in the coming weeks!</p>
            <p>Despite the lack of competition in sports, the Houses still compete intensely in the Distance Challenge, fighting to run more laps to add distance for their House. Our Distance Challenge MVP is Andy Tu, who has run over seventy kilometers in the past several weeks, allowing Blue Tang to pull ahead of the other houses in the Distance Challenge.</p>
        `
    },
    {
        title: "Broken Dreams",
        author: "Samuel Teoh",
        feature: "Leo Li",
        date: "October 14, 2024",
        issue: 3,
        category: "Feature",
        subcategory: ["Student"],
        type: "Cover",
        content: `
            <p>Ever since I was young, I’ve always loved sports. I cared more about sports and whether or not I won a competition than doing well in school. In elementary school, I won many awards in track and field. Gradually, more and more people began noticing me and paying attention to my achievements and passion.</p>

            <p>When I entered middle school, COVID hit Taiwan, and because of the quarantine, I wasn’t able to practice at all. My ability to play well dropped drastically, and I became a shell of what I once was. In my track and field competition, I failed and had to apply to public high schools. However, because I was still excellent in sports, I was selected for an elite sports program at Taipei’s top high school.</p>

            <p>And then I sprained my left ankle.</p>

            <p>The last year of middle school was the most depressing period in my life. After being unable to compete for the program, I frequently got injured during practice and then severely injured during tryouts. For a while, I couldn’t see my future clearly and often thought about giving up entirely. When my coach gave me a pair of shoes, I cried because of what I’d lost. When I closed my eyes, all I could think about was the program and my broken dreams.</p>

            <p>After recovering from my injury and training hard, my athletic performance gradually improved. In my final competition, I achieved a good result and qualified for other top-tier high schools. Although I did not go to the top sports program in Taipei, I am still happy and content to be here at Primacy.</p>
        `
    },
    {
        title: "Dating Advice (Part 2)",
        author: "Samuel Teoh",
        feature: "Isaiah Chieh",
        date: "October 14, 2024",
        issue: 3,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
            <p>Dating advice of the day? Always respect your partner’s decisions and don’t pressure them to do things they don’t want to do.</p>

            <p>It was late at night, and I’d finished my homework already, but my girlfriend was still in the middle of hers when I called her. We talked about precalculus during the summer classes, what we had to do for the next day, and how annoying the class was. I lay on my bed, staring up at the ceiling, laughing and teasing her like we normally do.</p>

            <p>During the call, I asked her to do something that I thought was fun, but she thought it would be embarrassing. I kept insisting that she should do it, however. She continued to refuse and got upset. There would be long periods in the call where there was silence, and neither of us talked. Finally, she hung up, ending the call.</p>

            <p>The next day in school, she was upset with me and avoided me, thinking that I would continue trying to ask her about the subject. During class, when I tried to help her with her homework, she would turn away and do it on her own. I then realized that I had gone too far during the call. I apologized and told her that I would not force her to do anything.</p>

            <p>From this incident, I realized that even though you’re close to someone, you should not disrespect their choices. Crossing the boundaries can lead to tensions and conflicts that might ruin your relationship.</p>
        `
    },
    {
        title: "SA Day at Leofoo Village",
        author: "Samuel Teoh",
        feature: null,
        date: "October 14, 2024",
        issue: 3,
        category: "School Updates",
        subcategory: ["SA Day", "SA Event"],
        type: null,
        content: `
            <p>A chapter closes and a new one begins as life continues. On Friday, September 27th, we welcomed our first Student Association (SA) day of the school year at Leofoo Village Theme Park. Fresh from the one-hour bus ride, sharks gathered around the auditorium of Leofoo Village, buzzing with lots of motivation. Little did we know, the day was about to get even better. </p>
            <p>House chants, the most favorable part of the day, were starting. Yellow shirts emerged from the crowd, each figure standing tall and confident. With strong, confident, and broad shoulders, they marched individually to the center, igniting an unusual fanning amongst the girls and the boys under the chilly weather.</p>
            <p>Even I had to discreetly wipe away the sweat gathering in the corners of my eyes, mesmerized by their powerful performance. Afterward, each house split: thrill-seekers and those preferring more relaxed rides. Throughout the morning, the groups had one task imposed on them: complete as many rides as possible.</p>
            <p>Each ride contains different house points depending on its thrill level, sorted by SA — red for the most thrilling, followed by orange, yellow, and green. The challenge was on, and the excitement grew as we raced from one adventure to the next, with house pride driving us forward. SA Day ended with all the students exhausted yet satisfied, with much thanks to the SA members for organizing this exciting event for the entire school!</p>
        `
    },
    {
        title: "Gator Nation Sweeps Swarm 27-12",
        author: "Samuel Teoh",
        feature: null,
        date: "October 14, 2024",
        issue: 3,
        category: "Intramurals",
        subcategory: ["Basketball", "Maxball", "Sports"],
        type: null,
        content: `
            <p>After two weeks of no intramurals, from SA Day to Develop Wisdom Day, the final week of basketball and maxball arrived with the excitement and anticipation of many. Intramurals quickly picked up pace.</p>
            <p>In basketball, Gator Nation and Swarm met, both coming off perfect 2-0 runs. Primacy’s basketball star Leo Li carried Gator Nation to sweep Swarm 27-12, with the incredible defensive abilities of Isaiah Chieh and Satoru Kumazawa’s handles rounding out the team’s performance. Blue Tang beat Wolfpack easily with a score of 29-9.</p>
            <p>In maxball, Wolfpack and Gator Nation fought head-to-head, each trying to get an edge over the other. With Jolie Lin’s defensive abilities as the goalie, Gator Nation was unable to score and ended the game with a 3-0 win for Wolfpack. Swarm also failed to score against Blue Tang’s 4-point advantage, giving Blue Tang a solid performance.</p>
        `
    },
    {
        title: "First Crush",
        author: "Samuel Teoh",
        feature: "Joanna Tang",
        date: "September 25, 2024",
        issue: 2,
        category: "Feature",
        subcategory: ["Student"],
        type: "Cover",
        content: `
            <p>What’s your type? When I first entered junior high, I dreamed of having a Playboy-type boyfriend who was at least six feet tall and had a perfect face. However, my first crush was not even close to the boyfriend I dreamed of. The only word I would use to describe him would be a ‘nerd’. A complete nerd who didn’t know how to have fun.</p>

            <p>He enjoyed reading books, and his definition of ‘fun’ was spending time at the library. He told me he liked playing basketball, but lost to me when we hung out. Far from the six-foot, handsome Playboy, my first crush was around my height with nothing special about his physical features – a normal boy with normal looks.</p>

            <p>But why was it that whenever our eyes met, I felt butterflies in my stomach? Every time we walked past each other, my eyes caught his, and my brain would buzz in spirals. Once, we arranged to have a secret date in the basement of our school.</p>

            <p>We walked around school together, talking about anything and everything, spilling our thoughts and emotions. We didn’t want other students to know we were in a relationship, so we tread carefully. Whenever we caught sight of a teacher or classmate in the distance, we turned around quickly and walked away. In hindsight, it was sad that we rarely spent time together outside of school, but it was one of my favorite memories in middle school.</p>

            <p>One morning, he came to school with a cup of coffee from Starbucks in his hand. With a small smile, he handed it to me. I know it was just a cup of coffee, but it made me so incredibly happy and loved – it was these small acts of kindness that made me fall for him. At the time, I hated studying or anything related to school. But I still went out and studied with him because what mattered was not what we did, but that we did it together. Although we broke up in the end, we are still friends, and I’m so grateful for the time we spent together.</p>
        `
    },
    {
        title: "Communication",
        author: "Samuel Teoh",
        feature: "Chihoko Tanaka",
        date: "September 25, 2024",
        issue: 2,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
            <p>When you make plans with other people, especially your close friends, always make sure to communicate your thoughts clearly to minimize misunderstandings. I learned this the hard way in sixth grade when our school held a Spirit Week.</p>

            <p>The day before International Day, my friend and I agreed to wear matching yukata, a casual version of a kimono. That morning, excited for the day, I carefully slipped into my bright asagao, flowery yukata, and twirled in front of the mirror. Arriving at school, I scanned the crowd of students for my friend but could not find her.</p>

            <p>When I sat down at my desk, the classroom door slid open and my friend walked through. My excited smile faded from my face. She was not wearing the yukata that we’d arranged, but a Japanese soccer jersey.</p>

            <p>Later, I learned that she’d simply forgotten (we didn’t have phones at the time), but during class, all I could do was hold back my tears. I pulled out my notebook from my backpack and began writing about how I wanted to go home. I want to be in my regular clothes, I wrote. It’s so embarrassing with so many people looking at me. What I forgot was that I’d written in a notebook that we had to return to the teacher.</p>

            <p>Through this experience, I realized that communication is one of the most important aspects of any plan or event. Even in cases when your plan goes wrong, you should always work through it rationally instead of being overcome by emotion. I’m still thankful for this experience, however. It is such experiences that have built the person I am today.</p>
        `
    },
    {
        title: "New Mastery Policy",
        author: "Jude Chin",
        feature: null,
        date: "September 25, 2024",
        issue: 2,
        category: "School Updates",
        subcategory: ["Policy"],
        type: null,
        content: `
            <p>Starting this school year, Primacy students will receive only three Mastery Tokens per half-credit course. Once a student has used all three tokens, no further attempts for mastery will be allowed. While the rationale for this change hasn't been fully explained, some students speculate that the previous policy was being exploited, with students not putting in their best effort initially.</p>

            <p>Both students and teachers have shared several advantages of the new policy. Andy, for instance, believes it will motivate students to study more diligently from the start and put in their best effort.</p>

            <p>Steffi agrees, noting that students are now more likely to work harder on projects and tests. Mr. Gene also expressed relief, as the new policy reduces the excessive number of mastery requests he had been receiving.</p>

            <p>Despite the positives, there are also concerns about the new system. Enzo pointed out the difficulty of deciding when to use the tokens, as students might not know when they’ll need them most. Mr. Brannaka voiced concerns that students who are genuinely struggling with concepts may now have fewer opportunities to improve and catch up.</p>

            <p>Some believe that Mastery Tokens should be reserved for quizzes and tests rather than homework or assignments since quizzes and tests typically carry more weight in grading. Mr. Brannaka, who has noticed students struggling more with these assessments, argues that improving quiz and test performance could have the greatest impact on overall grades.</p>

            <p>Ultimately, the new policy has prompted students to take their studies more seriously. Teachers, too, are now more motivated to ensure their students grasp the course content, as more homework will be given in Mr. Harper’s classes. As Mr. Brannaka put it, while much of what you learn in school may not seem immediately useful, you won’t know which parts are valuable until much later.</p>
        `
    },
    {
        title: "Gator Nation, Basketball Powerhouse",
        author: "William Lee",
        feature: null,
        date: "September 25, 2024",
        issue: 2,
        category: "Intramurals",
        subcategory: ["Basketball", "Sports"],
        type: null,
        content: `
            <p>On the 5th game week of Primacy Intramurals, our school brought back the sports that many of the students enjoyed: basketball and maxball. They’re known for high-intensity games that thrill everyone, ending successfully.</p>

            <p>As the competition heated up, our four houses—Gator Nation, Blue Tang, Swarm, and Wolfpack—faced off in epic showdowns. Gator Nation emerged as a powerhouse, dominating the basketball games with their incredible teamwork and determination. Swarm was victorious against both their opponents, Blue Tang and Wolfpack. Their players displayed remarkable skill and strategy, leading them to victory against tough opponents. The two dominant teams have yet to face each other, however. The winner will arise in the weeks to come.</p>

            <p>This week, we interview Leo Li and his experience with basketball.</p>

            <p>Can you share your experiences in basketball?</p>

            <p>When I was in fifth grade, I started practicing track and field and basketball. I could forget my worries when I was doing track and basketball. Track and field was my major at that time, so I practiced for more than 6 hours a day, which made me improve a lot.</p>

            <p>What is your condition now?</p>

            <p>I play basketball more often now, and I also play small games during holidays. I practice for more than 10 hours a week in order to improve. This also means that as long as you are willing to put in the time and don‘t give up, you will definitely improve.</p>

            <p>The following week, on September 20, Leo continued his stellar performance against Wolfpack, where he once again dazzled the crowd. It was Leo’s relentless drive, scoring over 10 points, that sealed the wins for Gator Nation.</p>

        `
    },
    {
        title: "First Impressions",
        author: "Samuel Teoh",
        feature: "Larissa Kuo",
        date: "September 13, 2024",
        issue: 1,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
            <p>I met Joanna for the first time during assembly. She came in the middle of October and I’d heard a lot of things about her – namely, she would hit you on the arm when you talked to her. When I first met her, I thought she was loud, and because of this, I disliked Joanna from the start and didn’t want to be friends with her.</p>
            <p>However, when we started talking and practicing together every day after school for the banquet, I started opening up to her. I realized she wasn’t as bad as my initial impression of her and that I should try and give her a chance.</p>
            <p>During summer FLEX, we were the only girls, so we sat and ate lunch together every day. Through talking and interacting with her in the summer, I found that she is actually an amazing person who’s always bright and positive. When you see someone for the first time, you tend to judge them on their actions, but you never actually know what they’re like on the inside. Those judgments can lead to misunderstandings. So I would say that before you make any judgments based on first impressions, give them a chance.</p>
        `
    },
    {
        title: "Dating Advice",
        author: "Samuel Teoh",
        feature: "Lilian Chou",
        date: "September 13, 2024",
        issue: 1,
        category: "Feature",
        subcategory: ["Student"],
        type: "Cover",
        format: "png",
        content: `
            <p>Dating advice of the day? Always cherish the moments you have with your loved ones because you never know what will happen next.</p>

            <p>One day, my boyfriend and I were just casually texting each other; nothing serious, nothing seemed out of the ordinary. Was it about what we did that day? Or about last week’s basketball game? It didn’t matter. I asked him if he wanted to call, and he agreed, and I called him. He didn’t respond.</p>

            <p>For over forty minutes, I waited, wondering what had happened. Did something go wrong? When he came back, he had no explanation, no excuse, no apology. During the call, he wasn’t energetic and would only reply to me with one or two words.  asked him what was going on, and he dismissed me, saying he was just tired.</p>

            <p>It was one of the most intense conflicts we’ve had since the start of our relationship. For over two weeks, we didn’t text or talk to each other. When we finally apologized and got back together, I realized the frailty of relationships.</p>

            <p>From the fact that in one moment we were just casually texting each other, and in the next hour we were having a conflict that almost made me lose him, I learned that you can never predict what will happen next.</p>

            <p>Live every moment to its fullest and don’t do anything you’ll regret later – show as much love as you can.</p>
        `
    },
    {
        title: "Shocking New Phone Policy",
        author: "Jude Chin",
        feature: null,
        date: "September 13, 2024",
        issue: 1,
        category: "School Updates",
        subcategory: ["Policy"],
        type: null,
        content: `
            <p>On August 19, 2024, Vice Principal Eric Shen announced a shocking new policy: When students enter the school building in the morning, they are banned from using their phones during school time and must put them in a signal-blocking phone bag. This policy, implemented by schools across the United States, has sparked mixed reactions among students and teachers, positive and negative, the good and the bad. Understandably, many students found the policy inconvenient and limiting.</p>

            <p>Enzo, a senior, was mad about the rule, stating, “It’s useless and very bad. Sometimes the school Wi-Fi is slow, and we must use our hotspots.” Similarly, Marie was very sad, “It’s very bad. Sometimes we want to take pictures to create memories. Now there are no school pictures, and I feel sad.”</p>

            <p>Joey stated, “We need our phones for Kahoot in class, and it’s inconvenient for ordering food.” Don’t let your mindset be dictated by the students’ negative opinions as you read through their feedback. There are plenty of benefits to the newly announced cellphone policy. The majority of the teachers, of course, thought that the cellphone policy was a huge opportunity for students to break their phone addiction.</p>

            <p>“It’s good for students to take a break from electronics,” Mr. Brannaka said. “Before, when students were on their phones between classes, they weren’t doing schoolwork… now it’s easier for them to focus.” In the eyes of supporters, the policy offers a chance to curb the dependency on phones and promote more meaningful interactions, but for many students, the shift is challenging and affects their daily routines.</p>
        `
    },
    {
        title: "Shota Fukumoto Shares His Journey and Tips for Table Tennis and Running",
        author: "William Lee",
        feature: "Shota Fukumoto",
        date: "September 13, 2024",
        issue: 1,
        category: "Feature",
        subcategory: ["Student"],
        type: "Secondary",
        content: `
            <p>In this edition, we interviewed Shota Fukumoto, a standout athlete at TPCA known for his incredible athletic skills, dedication, and consistent practice for sports. Shota shares his experience in sports and offers tips on how to improve athletic performance.</p>

            <p>How did you develop your table tennis skills?</p>

            <p>For me, maybe between my 4th and 6th grade years, I played table tennis with my friends almost every day at a nearby children’s play facility. Thanks to that, I have acquired some skills. Personally, another reason is that I’ve been playing soccer all of my life, so my athletic nerves are extremely good, I think.</p>

            <p>Thanks to soccer, I can do all the basic exercises, whether it is table tennis or running. Furthermore, one technique I’ve learned is to hit the ball from underneath to create a downspin. This adds extra control and makes the ball harder for your opponent to return.</p>

            <p>How has soccer helped your running abilities?</p>

            <p>I am able to run because I have always played soccer. Running all the time can be quite difficult, but this is not very hard for me because I’ve trained for soccer for so long. I have the stamina and muscles that I’ve built through soccer. When running, especially in soccer, it helps to lean your balance slightly forward. This improves speed and control, allowing you to cover more ground efficiently and keep your momentum going. Remember, muscles don’t betray you.</p>
        `
    },
    {
        title: "Can Mr. Ayomi Be Stopped?",
        author: "William Lee",
        feature: null,
        date: "September 13, 2024",
        issue: 1,
        category: "Intramurals",
        subcategory: ["Table Tennis", "Ping Pong", "Sports"],
        type: null,
        content: `
            <p>On September 6, 2024, the 4th official intramurals, that was held in this 24-25 school year, at Beitou Sports Center, with thrilling table tennis action as the four school houses – Blue Tang, Swarm, Gator Nation, and Wolfpack – faced off in competition.</p>

            <p>One of the standout performances of the day came from none other than Mr. Ayomi, the Swarm’s dedicated house sponsor and a master of the table tennis game. He teamed up with Swarm’s senator, Samuel, a talented new student making his debut in TPCA’s sports scene.</p>

            <p>The energy was high as Swarm battled their way through the rounds, with Mr. Ayomi stepping up in the most critical moments. In a match against Shota & William from Blue Tang, the game came down to the wire. With the score tied in the final round, Mr. Ayomi pulled off an incredible last-minute win, securing a clear victory for Swarm in both rounds of the table tennis showdown!</p>

            <p>But the excitement didn’t stop there, Swarm faced off against the Wolfpack in another heart-pounding match. Once again, Mr. Ayomi showed his skills, leading the team to another decisive 2-0 win. His quick reflexes and powerful shots had the crowd on their feet, proving he’s not just a teacher, but a table tennis legend in the making!</p>
        `
    }
];
*/

async function loadArticlesData() {
    const csvUrl = `https://docs.google.com/spreadsheets/d/e/2PACX-1vRMXMR13uMKs85VZrY8PoCDnR3Mnc6KVhUpz6V16cCt8y-MMP2MMuYonpTKFUFGfDvFGkcu279PlgPX/pub?output=csv&gid=1738836167`;
    
    return fetch(csvUrl)
        .then(response => response.text())
        .then(csvText => {
            const rows = [];
            const regex = /(?:,|\r?\n|^)(?:"([^"]*(?:""[^"]*)*)"|([^",\r?\n]*))/g;
            let row = [];
            let match;
            
            while ((match = regex.exec(csvText)) !== null) {
                if (match[0].startsWith('\n') || match[0].startsWith('\r')) {
                    if (row.length > 0) rows.push(row);
                    row = [];
                }
                let value = (match[1] !== undefined) ? match[1].replace(/""/g, '"') : match[2];
                row.push(value ? value.trim() : "");
            }
            if (row.length > 0) rows.push(row);

            const headers = rows[0].map(h => h.toLowerCase().trim()); 
            
            articles = rows.slice(1).map(values => {
                const article = {};
                headers.forEach((header, i) => {
                    let value = values[i] || "";

                    const titleSlug = article.title 
                        ? article.title.toLowerCase().trim().replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-") 
                        : "no-title";

                    article.id = `issue-${article.issue}-${titleSlug}`;
                                        
                    if (header === "subcategory") {
                        article[header] = value ? value.split(",").map(s => s.trim()) : [];
                    } else if (header === "issue") {
                        article[header] = parseInt(value) || 0;
                    } else {
                        article[header] = value || null;
                    }
                });

                if (article.image && article.image.includes("drive.google.com")) {
                    const fileId = article.image.split('id=')[1] || article.image.split('/d/')[1].split('/')[0];
                    article.image = `https://lh3.googleusercontent.com/u/0/d/${fileId}`;
                } else if (!article.image) {
                    const categoryPath = article.category ? article.category.toLowerCase().replace(/\s+/g, "-") : "uncategorized";
                    const titleSlug = article.title ? article.title.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-") : "no-title";
                    const ext = article.format || "jpg";
                    article.image = `${categoryPath}/issue-${article.issue}-${titleSlug}.${ext}`;
                }

                return article;
            });

            sortedArticles = [...articles].sort((a, b) => b.issue - a.issue);
            renderArticles();
        })
        .catch(err => console.error("Error loading articles:", err));
}

function renderArticles() {
    console.log("Ready to display:", articles.length, "articles");
}

loadArticlesData();