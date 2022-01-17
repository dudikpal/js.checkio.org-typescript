import {biggerPrice} from "./biggerPrice";

describe('Bigger price goods', () => {
    it.each`
        inputAmount     |inputGoods     | expected
        ${2}            |${[
        {"name": "bread", "price": 100},
        {"name": "wine", "price": 138},
        {"name": "meat", "price": 15},
        {"name": "water", "price": 1}
    ]}   	        |${[{"name": "wine", "price": 138},
        {"name": "bread", "price": 100}]}
        ${1}   	|${[
        {"name": "pen", "price": 5},
        {"name": "whiteboard", "price": 170}
    ]}        |${[{"name": "whiteboard", "price": 170}]}
    `
    ("expected $expected here", ({inputAmount, inputGoods, expected}) => {
        expect(biggerPrice(inputAmount, inputGoods)).toEqual(expected);
    })
})