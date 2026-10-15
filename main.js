const zodiacSign = [
    {
        id: 0,
        name: "Aries",
        date: "Mar. 21 - Apr. 19",
        image: "images/aries.jpg",
        sound: "",
        text: "Aries is the first astrological sign in the zodiac, originating from the constellation Aries. It spans the 0th to 30th degree of the zodiac, between Pisces and Taurus. Under the tropical zodiac, the Sun transits this sign between March 21 and April 19, while under the sidereal zodiac, it currently transits the sign between April 16 and May 14. The symbol of the ram is based on the mythological creature known as the Chrysaor."
    },
    {
        id: 1,
        name: "Taurus",
        date: "Apr. 20 - May 20",
        image: "images/taurus.jpg",
        sound: "",
        text: "Taurus is the second astrological sign in the zodiac, originating from the constellation Taurus. It spans the 30th to 60th degree of the zodiac, between Aries and Gemini. Under the tropical zodiac, the Sun transits this sign between April 20 and May 20, while under the sidereal zodiac, it currently transits the sign between May 15 and June 14. The symbol of the bull is based on the mythological creature known as the Minotaur."
    },
    {
        id: 2,
        name: "Gemini",
        date: "May 21 - Jun. 20",
        image: "images/gemini.jpg",
        sound: "",
        text: "Gemini is the third astrological sign in the zodiac, originating from the constellation Gemini. It spans the 60th to 90th degree of the zodiac, between Taurus and Cancer. Under the tropical zodiac, the Sun transits this sign between May 21 and June 20, while under the sidereal zodiac, it currently transits the sign between June 15 and July 14. The symbol of the twins is based on Castor and Pollux, two legendary Greek heroes."
    },
    {
        id: 3,
        name: "Cancer",
        date: "Jun. 21 - Jul. 22",
        image: "images/cancer.jpg",
        sound: "",
        text: "Cancer is the fourth astrological sign in the zodiac, originating from the constellation Cancer. It spans the 90th to 120th degree of the zodiac, between Gemini and Leo. Under the tropical zodiac, the Sun transits this sign between June 21 and July 22, while under the sidereal zodiac, it currently transits the sign between July 15 and August 14. The symbol of the crab is based on the mythological creature known as the Lernaean Hydra."
    },
    {
        id: 4,
        name: "Leo",
        date: "Jul. 23 - Aug. 22",
        image: "images/leo.jpg",
        sound: "",
        text: "Leo is the fifth astrological sign in the zodiac, originating from the constellation Leo. It spans the 120th to 150th degree of the zodiac, between Cancer and Virgo. Under the tropical zodiac, the Sun transits this sign between July 23 and August 22, while under the sidereal zodiac, it currently transits the sign between August 15 and September 14. The symbol of the lion is based on the mythological creature known as the Nemean Lion."
    },
    {
        id: 5,
        name: "Virgo",
        date: "Aug. 23 - Sep. 22",
        image: "images/virgo.jpg",
        sound: "",
        text: "Virgo is the sixth astrological sign in the zodiac, originating from the constellation Virgo. It spans the 150th to 180th degree of the zodiac, between Leo and Libra. Under the tropical zodiac, the Sun transits this sign between August 23 and September 22, while under the sidereal zodiac, it currently transits the sign between September 15 and October 14. The symbol of the virgin is based on the mythological creature known as the Hesperides."
    },
    {
        id: 6,
        name: "Libra",
        date: "Sep. 23 - Oct. 22",
        image: "images/libra.jpg",
        sound: "",
        text: "Libra is the seventh astrological sign in the zodiac, originating from the constellation Libra. It spans the 180th to 210th degree of the zodiac, between Virgo and Scorpio. Under the tropical zodiac, the Sun transits this sign between September 23 and October 22, while under the sidereal zodiac, it currently transits the sign between October 15 and November 14. The symbol of the scales is based on the mythological creature known as the Pegasus."
    },
    {
        id: 7,
        name: "Scorpio",
        date: "Oct. 23 - Nov. 21",
        image: "images/scorpio.jpg",
        sound: "",
        text: "Scorpio is the eighth astrological sign in the zodiac, originating from the constellation Scorpio. It spans the 210th to 240th degree of the zodiac, between Libra and Sagittarius. Under the tropical zodiac, the Sun transits this sign between October 23 and November 21, while under the sidereal zodiac, it currently transits the sign between November 15 and December 14. The symbol of the scorpion is based on the mythological creature known as the Lernaean Hydra."
    },
    {
        id: 8,
        name: "Sagittarius",
        date: "Nov. 22 - Dec. 21",
        image: "images/sagittarius.jpg",
        sound: "",
        text: "Sagittarius is the ninth astrological sign in the zodiac, originating from the constellation Sagittarius. It spans the 240th to 270th degree of the zodiac, between Scorpio and Capricorn. Under the tropical zodiac, the Sun transits this sign between November 22 and December 21, while under the sidereal zodiac, it currently transits the sign between December 15 and January 14. The symbol of the centaur is based on the mythological creature known as the Centaur."
    },
    {
        id: 9,
        name: "Capricorn",
        date: "Dec. 22 - Jan. 19",
        image: "images/capricorn.jpg",
        sound: "",
        text: "Capricorn is the tenth astrological sign in the zodiac, originating from the constellation Capricorn. It spans the 270th to 300th degree of the zodiac, between Sagittarius and Aquarius. Under the tropical zodiac, the Sun transits this sign between December 22 and January 19, while under the sidereal zodiac, it currently transits the sign between January 15 and February 14. The symbol of the goat is based on the mythological creature known as the Sea-goat."
    },
    {
        id: 10,
        name: "Aquarius",
        date: "Jan. 20 - Feb. 18",
        image: "images/aquarius.jpg",
        sound: "",
        text: "Aquarius is the eleventh astrological sign in the zodiac, originating from the constellation Aquarius. It spans the 300th to 330th degree of the zodiac, between Capricornus and Pisces. Under the tropical zodiac, the Sun transits this sign between approximately January 20 and February 18, while under the sidereal zodiac, it currently transits the sign between approximately February 15 and March 14. The symbol of the water-bearer is based on Ganymede, a beautiful Phrygian youth in Greek mythology."
    },
    {
        id: 11,
        name: "Pisces",
        date: "Feb. 19 - Mar. 20",
        image: "images/pisces.jpg",
        sound: "",
        text: "Pisces is the twelfth astrological sign in the zodiac, originating from the Pisces constellation. It spans the 330th to 360th degree of the zodiac, between Aquarius and Aries. Under the tropical zodiac, the Sun transits this sign between February 19 and March 20, while under the sidereal zodiac, it currently transits the sign between March 12 and April 18. The symbol of the fish is based on the ichthyocentaurs, who aided Aphrodite when she was born from the sea."
    }
];

const RiceType = [
    {
        id: 0,
        name: "Long Grain Rice",
        date: "Mar. 21 - Apr. 19",
        image: "images/long_grain_rice.jpg",
        sound: "",
        text: "Long grain rice has a lower starch content than short grain rice, which gives it a fluffier texture when cooked. It is often used in pilafs and other dishes where a lighter, more separate grain is desired."
    },
    {
        id: 1,
        name: "Medium Grain Rice",
        date: "Apr. 20 - May 20",
        image: "images/medium_grain_rice.jpg",
        sound: "",
        text: "Medium grain rice has a moderate starch content, which gives it a balanced texture when cooked. It is often used in a variety of dishes and is a good all-around choice."
    },
    {
        id: 2,
        name: "Sushi Rice",
        date: "May 21 - Jun. 20",
        image: "images/sushi_rice.jpg",
        sound: "",
        text: "Sushi rice, also known as shari or sumeshi, is a short-grain rice used in Japanese cuisine. It is typically seasoned with a mixture of vinegar, sugar, and salt, giving it a slightly sweet and tangy flavor. Sushi rice is sticky and holds together well, making it ideal for forming sushi rolls and nigiri. It is an essential component of sushi dishes and is often paired with fresh fish, vegetables, and other ingredients to create a variety of sushi options."
    },
    {
        id: 3,
        name: "Basmati Rice",
        date: "Jun. 21 - Jul. 22",
        image: "images/basmati_rice.jpg",
        sound: "",
        text: "Basmati rice is a long-grain rice variety commonly used in Indian and Pakistani cuisine. It has a distinctive aroma and a light, fluffy texture when cooked. Basmati rice is known for its ability to remain separate and not clump together, making it ideal for biryanis, pilafs, and other aromatic dishes."
    },
    {
        id: 4,
        name: "Brown Rice",
        date: "Aug. 23 - Sep. 22",
        image: "images/brown_rice.jpg",
        sound: "",
        text: "Brown rice is a whole grain rice that has been milled to remove the bran and germ, but still retains the endosperm. It has a nuttier flavor and chewier texture than white rice, and is higher in fiber, vitamins, and minerals."
    },
    {
        id: 5,
        name: "Arborio Rice",
        date: "Sep. 23 - Oct. 22",
        image: "images/arborio_rice.jpg",
        sound: "",
        text: "Arborio rice is a short-grain rice variety commonly used in Italian cuisine. It has a high starch content, which gives it a creamy texture when cooked. Arborio rice is often used in risotto dishes, where it absorbs liquid and creates a rich, velvety consistency."
    },
    {
        id: 6,
        name: "Wild Rice",
        date: "Oct. 23 - Nov. 21",
        image: "images/wild_rice.jpg",
        sound: "",
        text: "Wild rice is a type of grass seed that is native to North America. It has a distinctive nutty flavor and a chewy texture when cooked. Wild rice is often used in pilafs, salads, and as a side dish, and is known for its high protein and fiber content."
    },
    {
        id: 7,
        name: "Black Rice",
        date: "Nov. 22 - Dec. 21",
        image: "images/black_rice.jpg",
        sound: "",
        text: "Black rice is a variety of rice that has a dark purple color when cooked. It has a nuttier flavor and a chewier texture than white rice, and is higher in antioxidants and fiber."
    },
    {
        id: 8,
        name: "Red Rice",
        date: "Dec. 22 - Jan. 19",
        image: "images/red_rice.jpg",
        sound: "",
        text: "Red rice is a variety of rice that has a reddish color when cooked. It has a distinct, earthy flavor and a chewy texture when cooked. Red rice is often used in pilafs and as a side dish, and is known for its high protein and fiber content."
    },
    {
        id: 9,
        name: "Sticky Rice",
        date: "Jan. 20 - Feb. 18",
        image: "images/sticky_rice.jpg",
        sound: "",
        text: "Sticky rice is a variety of rice that has a high starch content, which gives it a sticky texture when cooked. It is commonly used in Southeast Asian cuisine, particularly in dishes like Thai sticky rice and Vietnamese bánh chưng."
    },
    {
        id: 10,
        name: "Short Grain Rice",
        date: "Feb. 19 - Mar. 20",
        image: "images/short_grain_rice.jpg",
        sound: "",
        text: "Short grain rice has a higher starch content than long grain rice, which gives it a softer texture when cooked. It is often used in risotto and other creamy dishes."
    }
];