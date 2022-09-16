function convert () {
    for (let k = 0; k <= convert_data.length - 1; k++) {
        if (alphabet == convert_data[k]) {
            compared.push(alphabet_data[k])
            order = "" + k + ""
        }
    }
}
input.onGesture(Gesture.TiltRight, function () {
    if (ｍ < 10) {
        ｍ += 1
    } else {
        ｍ = 1
    }
    radio.setGroup(ｍ)
    basic.showString("ch" + ｍ)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    letter = "" + letter + "0"
})
input.onGesture(Gesture.Shake, function () {
    for (let i = 0; i <= compared.length - 1; i++) {
        radio.sendString("" + (compared[i]))
    }
    radio.sendString("end")
    basic.clearScreen()
    compared = []
})
input.onGesture(Gesture.ScreenDown, function () {
    compared.pop()
basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    alphabet = letter
    convert_data = binary_data
    convert()
    letter_data[parseInt(order)].showImage(0)
    letter = "#"
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    letter = "" + letter + "1"
})
radio.onReceivedStringDeprecated(function (receivedString) {
    if (receivedString == "end") {
        for (let j = 0; j <= received_data.length - 1; j++) {
            alphabet = received_data[j]
            convert_data = alphabet_data
            convert()
            result.push(order)
        }
        for (let l = 0; l <= result.length - 1; l++) {
            letter_data[parseInt(result[l])].showImage(0)
            basic.clearScreen()
            basic.pause(100)
        }
        result = []
        received_data = []
        compared = []
        basic.clearScreen()
    } else {
        received_data.push(receivedString)
    }
})
let ｍ = 0
let order = ""
let convert_data: string[] = []
let letter_data: Image[] = []
let binary_data: string[] = []
let alphabet_data: string[] = []
let result: string[] = []
let received_data: string[] = []
let letter = ""
let alphabet = ""
let compared: string[] = []
let receivedNumber: number[] = []
alphabet = ""
compared = []
letter = "#"
received_data = []
let receivedString = ""
result = []
radio.setGroup(1)
alphabet_data = [
"A",
"x",
"B",
"w",
"C",
"v",
"D",
"u",
"E",
"t",
"F",
"s",
"G",
"r",
"H",
"q",
"I",
"p",
"J",
"o",
"K",
"n",
"L",
"m",
"M",
"l",
"N",
"k",
"O",
"j",
"P",
"i",
"Q",
"h",
"R",
"g",
"S",
"f",
"T",
"e",
"U",
"d",
"V",
"c",
"W",
"b",
"X",
"a"
]
binary_data = [
"#01",
"#0101",
"#1000",
"#1010",
"#100",
"#0",
"#00100",
"#0010",
"#110",
"#0000",
"#10110",
"#0111",
"#101",
"#0100",
"#11",
"#10",
"#111",
"#1110",
"#0110",
"#1101",
"#010",
"#000",
"#1",
"#001",
"#01001",
"#0011",
"#01000",
"#0001",
"#011",
"#1001",
"#1011",
"#1100",
"#1111",
"#10111",
"#01011",
"#11011",
"#10101",
"#10100",
"#10011",
"#10001",
"#00101",
"#11010",
"#01100",
"#11001",
"#10010",
"#01110",
"#11101",
"#01010"
]
letter_data = [
images.createImage(`
    . . . . #
    . . . # .
    # # # . .
    . . # . .
    . . # . .
    `),
images.createImage(`
    . . . . .
    # # # # #
    # . . . #
    # . . . #
    # # # # #
    `),
images.createImage(`
    . . . # .
    . # . # .
    . # . # .
    # . . . #
    # . . . #
    `),
images.createImage(`
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    # # # # #
    `),
images.createImage(`
    . . # . .
    # # # # #
    . . # . .
    # . # . #
    # . # . #
    `),
images.createImage(`
    . . # . .
    . # . # .
    # . . . #
    . . . . #
    . . . . #
    `),
images.createImage(`
    # . . . .
    # # . . .
    # . # . .
    # . . # .
    # . . . .
    `),
images.createImage(`
    . . . # .
    . # # . .
    # # # # #
    . . # . .
    . # . . .
    `),
images.createImage(`
    # . . # .
    # . . # .
    . . . # .
    . . . # .
    . # # . .
    `),
images.createImage(`
    # # # # #
    . . . . #
    . # . # .
    . . # . .
    # # . # #
    `),
images.createImage(`
    . . # . .
    . . # . .
    # . # . #
    # . # . #
    # . # # .
    `),
images.createImage(`
    # # # # #
    . . . . #
    # # # # #
    . . . . #
    . . # # .
    `),
images.createImage(`
    # # # # #
    # . . . #
    . . . . #
    . . . # .
    . . # . .
    `),
images.createImage(`
    . # . . .
    # # # # #
    . # . . #
    . # . . #
    # . . # #
    `),
images.createImage(`
    # # # # #
    . . . . #
    # # # # #
    . . . . #
    # # # # #
    `),
images.createImage(`
    . # # # #
    . # . . #
    # . # . #
    . . . # .
    . # # . .
    `),
images.createImage(`
    # . . . .
    # . . . .
    # . . . #
    # . . # .
    # # # . .
    `),
images.createImage(`
    # . . # #
    . # . . #
    . . . . #
    . . . # .
    . . # . .
    `),
images.createImage(`
    # . # . #
    # . # . #
    . . . . #
    . . . # .
    . . # . .
    `),
images.createImage(`
    . . # . .
    # # # # .
    . . . # .
    . # # . #
    # . # . #
    `),
images.createImage(`
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    . # . . .
    `),
images.createImage(`
    . # # # .
    . . . . .
    # # # # #
    . . . . #
    . . # # .
    `),
images.createImage(`
    . . # . .
    . # . . .
    . # . # .
    # . . # .
    # # # . #
    `),
images.createImage(`
    . . # . .
    # # # # #
    # . . . #
    . . . . #
    . . # # .
    `),
images.createImage(`
    . . . # .
    # # # # #
    . # . # .
    # # # # #
    . . . # .
    `),
images.createImage(`
    . . . . #
    . . . . #
    . . . # .
    . . # . .
    # # . . .
    `),
images.createImage(`
    . . . # .
    # # # # #
    . . # # .
    . # . # .
    # . . # .
    `),
images.createImage(`
    . # . . .
    . # # # #
    # . . . #
    . . . # .
    . # # . .
    `),
images.createImage(`
    . # . . .
    # # # # #
    . # . . #
    . . # . .
    . . # . .
    `),
images.createImage(`
    # # # # #
    . . . . #
    # . . # .
    . # # . .
    . . . # .
    `),
images.createImage(`
    . # . . .
    . # # # #
    # . . # .
    . . . # .
    . . # . .
    `),
images.createImage(`
    # # # # #
    . . . . #
    . . . . #
    . . . # .
    . # # . .
    `),
images.createImage(`
    . . . . .
    # # # # #
    . . . . #
    . . . . #
    # # # # #
    `),
images.createImage(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    `),
images.createImage(`
    . # # # .
    . . . . .
    # # # # #
    . . # . .
    . # . . .
    `),
images.createImage(`
    # # # # #
    . . # . #
    . . # # .
    . . # . .
    . # . . .
    `),
images.createImage(`
    . # . # .
    # # # # #
    . # . # .
    . . . # .
    . . # . .
    `),
images.createImage(`
    . . # . .
    # # # # #
    . . # . .
    # # # # #
    . . # . .
    `),
images.createImage(`
    . . . . .
    . # # # .
    . . . # .
    . . . # .
    # # # # #
    `),
images.createImage(`
    . . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . .
    `),
images.createImage(`
    # # # # .
    . . . . .
    . # # # .
    . . . . .
    . # # # #
    `),
images.createImage(`
    # # . . .
    . . . . .
    # # . . #
    . . . # .
    # # # . .
    `),
images.createImage(`
    # # # # #
    . . . . #
    . . # # .
    . . # . .
    # # # # #
    `),
images.createImage(`
    # . . . #
    # # # # .
    # . . . .
    # . . . .
    . # # # #
    `),
images.createImage(`
    # # # # #
    . . # . .
    # # # # #
    . . # . .
    . . . # #
    `),
images.createImage(`
    . # . . .
    # # # # #
    . # . . #
    . # . . .
    . . # # #
    `),
images.createImage(`
    # # # # .
    . . . # .
    . . # . .
    . # . # .
    # . . . #
    `),
images.createImage(`
    . . . . .
    # # . . .
    . . . . #
    . . . # .
    # # # . .
    `)
]
