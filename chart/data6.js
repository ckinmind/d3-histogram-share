
const typeArr = [
  'feature', // 功能需求
  'bug',     // bug fix
  'meeting', // 开会
  'other'    // 其他
]

const timeArr = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]


const getType = () => {
  const num = Math.round(Math.random() * 100)
  return num < 70 ? 'feature' : (num < 75 ? 'bug' : (num < 90 ? 'other' : 'meeting'))
}


const generate = (date, key, count) => {
  return d3.range(0, count).map((item, index) => {
      const num = (Math.random() * 15 + 8).toFixed(0)
      return {
        id: key + index,
        date: `${date}-${num}`,
        timeLength: timeArr[Math.round(Math.random() * 7)],
        type: getType(),
      }
    })
}



const arr1 = generate('2017-12-18', 'a', 65)
const arr2 = generate('2017-12-19', 'b', 100)
const arr3 = generate('2017-12-20', 'c', 25)
const arr4 = generate('2017-12-21', 'd', 55)
const arr5 = generate('2017-12-22', 'e', 45)
const arr6 = generate('2017-12-23', 'f', 43)
const arr7 = generate('2017-12-24', 'g', 22)


const data = [
    ...arr1,
    ...arr2,
    ...arr3,
    ...arr4,
    ...arr5,
    ...arr6,
    ...arr7,
]

