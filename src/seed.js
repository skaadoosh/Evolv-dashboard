const names = ['Charvie Sharma', 'Laura Goyal', 'Danny Paul']
let users = []
names.map((name, i) =>
    users.push({
        userId: `user${i}`,
        name,
        email: name.toLowerCase().replace(/ /g, '') + '@gmail.com',
        stepsWalked: 2547,
        stepsTarget: 4000,
        performed: '2022/07/15',
        scheduled: '2022/07/27',
        calorieIntake: 2547,
        calorieTarget: 2500,
        protienConsumed: 45,
        protienTarget: 70,
        carbConsumed: 50,
        carbTarget: 70,
        fatConsumed: 30,
        fatTarget: 70,
        feedback: false
    })
)

users[0].feedback = true
users[1].feedback = true
users[1].scheduled = '2022/07/24'

const userData = JSON.stringify(users)
export default userData