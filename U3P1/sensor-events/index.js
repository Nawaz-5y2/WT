const EventEmitter = require('events');
const customEmitter = new EventEmitter();
//async listener for userlogin
customEmitter.on('userLogin', async(username) => { 
    console.log(`User "${username}" is logging in...`);
    //simulate delay with async/ await
    await simulateAsyncProcess('Checking user credentials...');
    console.log(`User "${username}" successfully logged in!`);
});
//Another async listener for sensor readings
customEmitter.on('sensorReading', async (sensorType, value) => {
    console.log('Received a reading from ${sensorType} data...');
    //simulate an async processing step
    await simulateAsyncProcess('Processing ${sensorType} data...');
    if(sensorType === 'temperature' && value > 30)
    {
        console.log('Warning: Temperature is too high!');
    }
    else
    {
        console.log('Sensor data processed successfully.');
    }
});
async function simulateAsyncProcess(message)
{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 2000);
    });
}

//simulate a user logging
setTimeout(() => {
    customEmitter.emit('userLogin', 'john_doe');
}, 1000);
//Simulate a temperature sensor reading
setTimeout(() => {
    customEmitter.emit('sensorReading', 'temperature', 35);
}, 3000);
//Simualate a humidity sensor reading
setTimeout(() => {
    customEmitter.emit('sensorReading', 'humidity', 50);
}, 5000);