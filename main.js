const ZodiacSign = [
    {
        id: 0,
        name: "Long Grain Rice",
        sign: "Aries",
        date: "Mar. 21 - Apr. 19",
        startMonth: 3,
        startDay: 21,
        endMonth: 4,
        endDay: 19,
        image: "images/long grain rice.jpg",
        signImage: "images/aries.jpg",
        sound: "",
        text: "Long grain rice has a lower starch content than short grain rice, which gives it a fluffier texture when cooked. It is often used in pilafs and other dishes where a lighter, more separate grain is desired."
    },
    {
        id: 1,
        name: "Medium Grain Rice",
        sign: "Taurus",
        date: "Apr. 20 - May 20",
        startMonth: 4,
        startDay: 20,
        endMonth: 5,
        endDay: 20,
        image: "images/medium grain rice.jpg",
        signImage: "images/taurus.jpg",
        sound: "",
        text: "Medium grain rice has a moderate starch content, which gives it a balanced texture when cooked. It is often used in a variety of dishes and is a good all-around choice."
    },
    {
        id: 2,
        name: "Sushi Rice",
        sign: "Gemini",
        date: "May 21 - Jun. 20",
        startMonth: 5,
        startDay: 21,
        endMonth: 6,
        endDay: 20,
        image: "images/sushi rice.jpg",
        signImage: "images/gemini.jpg",
        sound: "",
        text: "Sushi rice, also known as shari or sumeshi, is a short-grain rice used in Japanese cuisine. It is typically seasoned with a mixture of vinegar, sugar, and salt, giving it a slightly sweet and tangy flavor. Sushi rice is sticky and holds together well, making it ideal for forming sushi rolls and nigiri. It is an essential component of sushi dishes and is often paired with fresh fish, vegetables, and other ingredients to create a variety of sushi options."
    },
    {
        id: 3,
        name: "Basmati Rice",
        sign: "Cancer",
        date: "Jun. 21 - Jul. 22",
        startMonth: 6,
        startDay: 21,
        endMonth: 7,
        endDay: 22,
        image: "images/basmati rice.jpg",
        signImage: "images/cancer.jpg",
        sound: "",
        text: "Basmati rice is a long-grain rice variety commonly used in Indian and Pakistani cuisine. It has a distinctive aroma and a light, fluffy texture when cooked. Basmati rice is known for its ability to remain separate and not clump together, making it ideal for biryanis, pilafs, and other aromatic dishes."
    },
    {
        id: 4,
        name: "Brown Rice",
        sign: "Leo",
        date: "Jul. 23 - Aug. 22",
        startMonth: 7,
        startDay: 23,
        endMonth: 8,
        endDay: 22,
        image: "images/brown rice.jpg",
        signImage: "images/leo.jpg",
        sound: "",
        text: "Brown rice is a whole grain rice that has been milled to remove the bran and germ, but still retains the endosperm. It has a nuttier flavor and chewier texture than white rice, and is higher in fiber, vitamins, and minerals."
    },
    {
        id: 5,
        name: "Arborio Rice",
        sign: "Virgo",
        date: "Aug. 23 - Sep. 22",
        startMonth: 8,
        startDay: 23,
        endMonth: 9,
        endDay: 22,
        image: "images/arborio rice.jpg",
        signImage: "images/virgo.jpg",
        sound: "",
        text: "Arborio rice is a short-grain rice variety commonly used in Italian cuisine. It has a high starch content, which gives it a creamy texture when cooked. Arborio rice is often used in risotto dishes, where it absorbs liquid and creates a rich, velvety consistency."
    },
    {
        id: 6,
        name: "Wild Rice",
        sign: "Libra",
        date: "Sep. 23 - Oct. 22",
        startMonth: 9,
        startDay: 23,
        endMonth: 10,
        endDay: 22,
        image: "images/wild rice.jpg",
        signImage: "images/libra.jpg",
        sound: "",
        text: "Wild rice is a type of grass seed that is native to North America. It has a distinctive nutty flavor and a chewy texture when cooked. Wild rice is often used in pilafs, salads, and as a side dish, and is known for its high protein and fiber content."
    },
    {
        id: 7,
        name: "Black Rice",
        sign: "Scorpio",
        date: "Oct. 23 - Nov. 21",
        startMonth: 10,
        startDay: 23,
        endMonth: 11,
        endDay: 21,
        image: "images/black rice.jpg",
        signImage: "images/scorpio.jpg",
        sound: "",
        text: "Black rice is a variety of rice that has a dark purple color when cooked. It has a nuttier flavor and a chewier texture than white rice, and is higher in antioxidants and fiber."
    },
    {
        id: 8,
        name: "Red Rice",
        sign: "Sagittarius",
        date: "Nov. 22 - Dec. 21",
        startMonth: 11,
        startDay: 22,
        endMonth: 12,
        endDay: 21,
        image: "images/red rice.jpg",
        signImage: "images/sagittarius.jpg",
        sound: "",
        text: "Red rice is a variety of rice that has a reddish color when cooked. It has a distinct, earthy flavor and a chewy texture when cooked. Red rice is often used in pilafs and as a side dish, and is known for its high protein and fiber content."
    },
    {
        id: 9,
        name: "Sticky Rice",
        sign: "Capricorn",
        date: "Dec. 22 - Jan. 19",
        startMonth: 12,
        startDay: 22,
        endMonth: 1,
        endDay: 19,
        image: "images/sticky rice.jpg",
        signImage: "images/capricorn.jpg",
        sound: "",
        text: "Sticky rice is a variety of rice that has a high starch content, which gives it a sticky texture when cooked. It is commonly used in Southeast Asian cuisine, particularly in dishes like Thai sticky rice and Vietnamese bánh chưng."
    },
    {
        id: 10,
        name: "Short Grain Rice",
        sign: "Aquarius",
        date: "Jan. 20 - Feb. 18",
        startMonth: 1,
        startDay: 20,
        endMonth: 2,
        endDay: 18,
        image: "images/short grain rice.jpg",
        signImage: "images/aquarius.jpg",
        sound: "",
        text: "Short grain rice has a higher starch content than long grain rice, which gives it a softer texture when cooked. It is often used in risotto and other creamy dishes."
    },
    {
        id: 11,
        name: "Jasmine Rice",
        sign: "Pisces",
        date: "Feb. 19 - Mar. 20",
        startMonth: 2,
        startDay: 19,
        endMonth: 3,
        endDay: 20,
        image: "images/jasmine rice.jpg",
        signImage: "images/pisces.jpg",
        sound: "",
        text: "Jasmine rice is a long-grain rice variety that is popular in Thai and Vietnamese cuisine. It has a fragrant aroma and a light, fluffy texture when cooked."
    },
];
function findZodiacSign(month, day) {

    for (let i = 0; i < ZodiacSign.length; i++) {

        const sign = ZodiacSign[i];
        if (sign.startMonth < sign.endMonth) {

            if (
                (month === sign.startMonth && day >= sign.startDay) ||
                (month === sign.endMonth && day <= sign.endDay) ||
                (month > sign.startMonth && month < sign.endMonth)
            ) {
                return sign;
            }
        }
        else {

            if (
                (month === sign.startMonth && day >= sign.startDay) ||
                (month === sign.endMonth && day <= sign.endDay) ||
                month > sign.startMonth ||
                month < sign.endMonth
            ) {
                return sign;
            }
        }
    }

    return null;
}
const result = findZodiacSign(6, 15);

console.log("ZodiacSign:", result.sign);
console.log("RiceType:", result.name);