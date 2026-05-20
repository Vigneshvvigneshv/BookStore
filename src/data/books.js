// ================= COMEDY =================
import comedyLaughingLoudly from "../assets/comedyLaughingLoudly.jpg";
import comedyFunnyBone from "../assets/comedyFunnyBone.jpg";
import comedyHumorHighway from "../assets/comedyHumorHighway.jpg";
import comedyTickleTales from "../assets/comedyTickleTales.jpg";
import comedyJokesApart from "../assets/comedyJokesApart.jpg";
import comedyComedyCentral from "../assets/comedyComedyCentral.jpg";
import comedyHilariousWorld from "../assets/comedyHilariousWorld.jpg";

// ================= HORROR =================
import horrorShadowsoftheNight from "../assets/horrorShadowsoftheNight.jpg";
import horrorCursedMansion from "../assets/horrorCursedMansion.jpg";   // filename starts with comedy
import horrorDarkRitual from "../assets/horrorDarkRitual.jpg";         // filename starts with comedy
import horrorHauntedEchoes from "../assets/horrorHauntedEchoes.jpg";
import horrorWhispersintheWalls from "../assets/horrorWhispersintheWalls.jpg";
import horrorNightfallSecrets from "../assets/horrorNightfallSecrets.jpg";

// ================= SCI-FI =================
import scifiGalacticOdyssey from "../assets/scifiGalacticOdyssey.jpg";
import scifiFutureChronicles from "../assets/scifiFutureChronicles.jpg";
import scifiStarboundLegacy from "../assets/scifiStarboundLegacy.jpg";
import scifiQuantumParadox from "../assets/scifiQuantumParadox.jpg";
import scifiTimeWarpProtocol from "../assets/scifiTimeWarpProtocol.jpg";
import scifiNebulaHorizon from "../assets/scifiNebulaHorizon.jpg";

// ================= MYSTERY =================
import mysteryHiddenTruth from "../assets/mysteryHiddenTruth.jpg";
import mysteryCaseOfTheLostKey from "../assets/mysteryCaseoftheLostKey.jpg";
import mysteryPuzzleOfTheSilentRoom from "../assets/mysteryPuzzleoftheSilentRoom.jpg";
import mysteryVanishingPoint from "../assets/mysteryVanishingPoint.jpg";
import mysteryTrailOfSecrets from "../assets/mysteryTrailofSecrets.jpg";
import mysteryCipherCode from "../assets/mysteryCipherCode.jpg";
import mysteryShadowDetective from "../assets/mysteryShadowDetective.jpg";



export const books = [
    /* ================= COMEDY ================= */
    {
        id: "c1",
        title: "Laughing Loudly",
        author: "Ramesh Iyer",
        category: "Comedy",
        price: 199,
        image: comedyLaughingLoudly
    },
    {
        id: "c2",
        title: "The Funny Bone",
        author: "Anita Desai",
        category: "Comedy",
        price: 249,
        image: comedyFunnyBone
    },
    {
        id: "c3",
        title: "Humor Highway",
        author: "Sanjay Gupta",
        category: "Comedy",
        price: 179,
        image: comedyHumorHighway
    },
    {
        id: "c4",
        title: "Tickle Tales",
        author: "Meera Pillai",
        category: "Comedy",
        price: 220,
        image: comedyTickleTales
    },
    {
        id: "c5",
        title: "Jokes Apart",
        author: "Naveen Rao",
        category: "Comedy",
        price: 199,
        image: comedyJokesApart
    },
    {
        id: "c6",
        title: "Comedy Central",
        author: "Vidya Krishnan",
        category: "Comedy",
        price: 260,
        image: comedyComedyCentral
    },
    {
        id: "c7",
        title: "The Hilarious World",
        author: "Prakash Menon",
        category: "Comedy",
        price: 210,
        image: comedyHilariousWorld
    },

    /* ================= HORROR ================= */
    {
        id: "h1",
        title: "Shadows of the Night",
        author: "Kavya Menon",
        category: "Horror",
        price: 299,
        image: horrorShadowsoftheNight
    },
    {
        id: "h2",
        title: "Cursed Mansion",
        author: "Satyajit Rao",
        category: "Horror",
        price: 349,
        image: horrorCursedMansion
    },
    {
        id: "h3",
        title: "The Dark Ritual",
        author: "Ishita Narang",
        category: "Horror",
        price: 269,
        image: horrorDarkRitual
    },
    {
        id: "h4",
        title: "Haunted Echoes",
        author: "Vijay Kumar",
        category: "Horror",
        price: 310,
        image: horrorHauntedEchoes
    },
    {
        id: "h5",
        title: "Whispers in the Walls",
        author: "Pooja Shetty",
        category: "Horror",
        price: 320,
        image: horrorWhispersintheWalls
    },
    {
        id: "h6",
        title: "Nightfall Secrets",
        author: "Sahil Raj",
        category: "Horror",
        price: 290,
        image: horrorNightfallSecrets
    },

    /* ================= SCI-FI ================= */
    {
        id: "s1",
        title: "Galactic Odyssey",
        author: "Priya Nair",
        category: "Sci-Fi",
        price: 399,
        image: scifiGalacticOdyssey
    },
    {
        id: "s2",
        title: "Future Chronicles",
        author: "Rahul Sen",
        category: "Sci-Fi",
        price: 289,
        image: scifiFutureChronicles
    },
    {
        id: "s3",
        title: "Starbound Legacy",
        author: "Nisha Malhotra",
        category: "Sci-Fi",
        price: 350,
        image: scifiStarboundLegacy
    },
    {
        id: "s4",
        title: "Quantum Paradox",
        author: "Arjun Sharma",
        category: "Sci-Fi",
        price: 420,
        image: scifiQuantumParadox
    },
    {
        id: "s5",
        title: "Time Warp Protocol",
        author: "Sujatha Kumar",
        category: "Sci-Fi",
        price: 315,
        image: scifiTimeWarpProtocol
    },
    {
        id: "s6",
        title: "Nebula Horizon",
        author: "Harish Varma",
        category: "Sci-Fi",
        price: 280,
        image: scifiNebulaHorizon
    },

    /* ================= MYSTERY ================= */
    {
        id: "m1",
        title: "The Hidden Truth",
        author: "Vikram Joshi",
        category: "Mystery",
        price: 259,
        image: mysteryHiddenTruth
    },
    {
        id: "m2",
        title: "Case of the Lost Key",
        author: "Meera Kumar",
        category: "Mystery",
        price: 309,
        image: mysteryCaseOfTheLostKey
    },
    {
        id: "m3",
        title: "Puzzle of the Silent Room",
        author: "Anand Krish",
        category: "Mystery",
        price: 279,
        image: mysteryPuzzleOfTheSilentRoom
    },
    {
        id: "m4",
        title: "The Vanishing Point",
        author: "Ritika Singh",
        category: "Mystery",
        price: 320,
        image: mysteryVanishingPoint
    },
    {
        id: "m5",
        title: "Trail of Secrets",
        author: "Kiran Patel",
        category: "Mystery",
        price: 285,
        image: mysteryTrailOfSecrets
    },
    {
        id: "m6",
        title: "The Cipher Code",
        author: "Aman Verma",
        category: "Mystery",
        price: 350,
        image: mysteryCipherCode
    },
    {
        id: "m7",
        title: "Shadow Detective",
        author: "Sneha Rao",
        category: "Mystery",
        price: 270,
        image: mysteryShadowDetective
    }
];



export const booksDescription = {
    c1: "Laughing Loudly is a contemporary comedy that explores everyday situations through humor rooted in observation rather than exaggeration. The book focuses on relatable moments from family life, workplace interactions, and social expectations that often go unnoticed. Through witty narration and lighthearted storytelling, the author captures how small misunderstandings and habits create moments of laughter. The writing style is conversational, making it accessible to readers of all ages. Rather than relying on slapstick comedy, the book emphasizes intelligent humor that resonates over time. Readers looking for a relaxing, feel-good reading experience will find this book engaging, uplifting, and refreshing after long days.",

    c2: "The Funny Bone delivers humor that is subtle, character-driven, and rooted in realistic experiences. The narrative follows a series of interconnected stories that highlight the absurdity of everyday life without feeling forced or exaggerated. The author uses sharp dialogue and situational comedy to create moments that feel authentic and memorable. Each chapter presents a different perspective, allowing readers to see humor from multiple angles. This book is ideal for readers who enjoy comedy that is thoughtful rather than loud. It offers a balanced blend of entertainment and reflection, making it suitable for casual reading as well as thoughtful revisits.",

    c3: "Humor Highway is a collection of humorous essays and short narratives that explore life’s unpredictable twists. The book examines relationships, career struggles, and societal norms through a comedic lens that remains grounded and insightful. The author’s strength lies in turning ordinary experiences into amusing stories that feel familiar and relatable. Humor Highway does not rely on punchlines alone; instead, it builds laughter gradually through context and character development. Readers who appreciate observational comedy will find this book enjoyable. It offers a smooth reading flow that makes it easy to pick up and continue at any point.",

    c4: "Tickle Tales brings together a series of lighthearted stories designed to entertain without overwhelming the reader. The book emphasizes storytelling that is easy to follow while still offering clever humor woven into daily scenarios. The author’s writing style is warm and engaging, making readers feel connected to the characters quickly. Each tale stands on its own while contributing to an overall theme of finding joy in simple moments. This book is well-suited for readers seeking gentle humor and stress-free reading. It provides consistent entertainment without requiring deep emotional investment.",

    c5: "Jokes Apart presents comedy that blends irony with practical observations about modern life. The book explores how humor often emerges from unexpected places, including routine interactions and personal shortcomings. The author maintains a balanced tone, ensuring the comedy never feels forced or excessive. Instead, the humor unfolds naturally through situations readers can easily relate to. This approach makes the book appealing to a wide audience. Readers who enjoy clever wordplay combined with situational humor will find Jokes Apart both entertaining and memorable across multiple readings.",

    c6: "Comedy Central is a narrative-driven comedy that focuses on the personalities and interactions of its characters. Rather than relying on episodic jokes, the book develops humor through consistent character behavior and evolving relationships. The storytelling approach allows readers to become familiar with recurring traits that enhance the comedic impact over time. The writing is clean, engaging, and structured to maintain steady pacing. This book is suitable for readers who appreciate comedy built on continuity and character depth rather than standalone gags.",

    c7: "The Hilarious World explores humor through cultural observations and social commentary presented in an approachable manner. The author highlights everyday contradictions and habits that shape human behavior. The narrative tone remains friendly and inclusive, avoiding satire that feels overly critical. Each chapter offers fresh insights while maintaining a consistent humorous voice. Readers looking for comedy that reflects real life without exaggeration will find this book enjoyable. It serves as a reminder that humor often exists in the most ordinary moments.",

    h1: "Shadows of the Night is a suspense-driven horror novel that relies on atmosphere rather than shock value. The story unfolds gradually, allowing tension to build through subtle details and psychological unease. The author uses descriptive language to create a sense of isolation and uncertainty that lingers throughout the narrative. Readers are drawn into a world where fear emerges from the unknown rather than explicit events. This approach makes the book engaging without becoming overwhelming. It is well-suited for readers who prefer slow-burn horror that focuses on mood and anticipation.",

    h2: "Cursed Mansion is a classic haunted-house narrative that emphasizes mystery and dread over graphic horror. The plot revolves around unexplained occurrences that challenge the characters’ perception of reality. The author carefully layers suspense, revealing information at a controlled pace that keeps readers engaged. The setting plays a crucial role, with the mansion itself acting as a character. This book appeals to readers who enjoy structured horror stories with a clear narrative arc and a strong sense of place.",

    h3: "The Dark Ritual explores themes of belief, fear, and the consequences of forbidden knowledge. The narrative combines psychological tension with elements of traditional horror to create a balanced reading experience. The author focuses on character motivation, making the story feel grounded despite its supernatural elements. The pacing is deliberate, allowing suspense to develop naturally. Readers who appreciate horror that blends mystery with thoughtful storytelling will find this book compelling and immersive.",

    h4: "Haunted Echoes is a horror novel centered on lingering memories and unresolved past events. Rather than relying on constant scares, the book builds tension through emotional depth and unsettling imagery. The author creates an atmosphere where silence and absence feel as threatening as physical danger. This narrative style encourages readers to engage actively with the story. Haunted Echoes is ideal for readers who enjoy introspective horror with psychological undertones.",

    h5: "Whispers in the Walls examines how fear can emerge from familiar environments. The story unfolds in a seemingly ordinary setting that gradually reveals darker layers. The author’s writing style emphasizes subtle cues and emotional responses, creating a slow escalation of tension. The horror elements are integrated seamlessly into the narrative, maintaining realism. Readers who prefer understated horror that relies on suggestion rather than explicit violence will appreciate this book.",

    h6: "Nightfall Secrets is a suspense-oriented horror story that combines investigation with supernatural elements. The narrative follows characters as they uncover hidden truths that challenge their understanding of reality. The author maintains a steady pace, ensuring consistent tension without overwhelming the reader. This book balances mystery and horror effectively, making it suitable for readers who enjoy structured storytelling with unsettling themes.",

    s1: "Galactic Odyssey is a science fiction novel that explores exploration, discovery, and the limits of human ambition. The story presents futuristic technology within a logically structured universe. The author focuses on world-building, ensuring the setting feels cohesive and believable. Characters are developed gradually, allowing readers to connect with their motivations. This book appeals to readers who enjoy science fiction grounded in plausible concepts rather than abstract speculation.",

    s2: "Future Chronicles examines how technological advancement influences society and personal identity. The narrative presents multiple timelines that converge into a unified storyline. The author’s writing emphasizes cause-and-effect relationships, making the futuristic setting feel realistic. Readers who appreciate thoughtful science fiction with social commentary will find this book engaging and intellectually stimulating.",

    s3: "Starbound Legacy follows the journey of individuals navigating political and ethical challenges in a technologically advanced society. The story balances action with philosophical reflection. The author presents complex ideas in an accessible manner, ensuring the narrative remains engaging. This book is suitable for readers who enjoy science fiction that combines adventure with deeper thematic exploration.",

    s4: "Quantum Paradox explores scientific concepts through speculative storytelling that remains approachable. The narrative centers on consequences rather than technical detail, allowing readers to focus on the human impact of advanced technology. The pacing is consistent, and the plot maintains clarity throughout. This book appeals to readers who enjoy conceptual science fiction without excessive complexity.",

    s5: "Time Warp Protocol presents a controlled exploration of time manipulation and its ethical implications. The author emphasizes logical consistency, ensuring the story avoids unnecessary contradictions. Characters are placed in situations that test their values, creating emotional engagement. Readers who enjoy structured science fiction narratives with strong internal logic will appreciate this book.",

    s6: "Nebula Horizon is a space-focused science fiction novel that emphasizes exploration and discovery. The author’s descriptive writing creates vivid imagery of distant environments. The narrative maintains a balance between technical detail and emotional storytelling. This book is ideal for readers seeking immersive science fiction with a clear narrative direction.",

    m1: "The Hidden Truth is a mystery novel built around careful observation and logical deduction. The story unfolds through a series of clues that encourage readers to actively engage with the narrative. The author avoids unnecessary complexity, ensuring the mystery remains accessible. This book appeals to readers who enjoy solving puzzles alongside the characters.",

    m2: "Case of the Lost Key presents a classic mystery structure with modern storytelling techniques. The plot emphasizes reasoning and investigation over action. The author maintains clarity, allowing readers to follow the logic easily. This book is suitable for readers who enjoy traditional mystery narratives with a contemporary tone.",

    m3: "Puzzle of the Silent Room focuses on psychological intrigue and subtle clues. The narrative encourages close attention to detail, rewarding observant readers. The author’s writing style is measured and precise, ensuring the mystery unfolds naturally. Readers who enjoy intellectual challenges will find this book satisfying.",

    m4: "The Vanishing Point explores disappearance and perception within a tightly constructed mystery. The author emphasizes atmosphere and character perspective, creating a sense of uncertainty. The narrative maintains tension without relying on sudden twists. This book appeals to readers who prefer methodical mystery storytelling.",

    m5: "Trail of Secrets follows an investigation that gradually reveals interconnected motives. The author balances suspense with logical progression, ensuring the story remains engaging. Characters are developed through their decisions rather than exposition. This book suits readers who enjoy realistic mystery narratives.",

    m6: "The Cipher Code is a mystery centered on decoding hidden messages and patterns. The narrative encourages analytical thinking while maintaining an engaging pace. The author presents challenges that feel solvable, making readers active participants. This book appeals to readers who enjoy intellectually driven mysteries.",

    m7: "Shadow Detective explores investigation through character intuition and observation. The story unfolds steadily, emphasizing reasoning over action. The author’s writing maintains clarity, ensuring readers can follow the investigative process. This book is ideal for readers who appreciate grounded, realistic mystery fiction."
};
