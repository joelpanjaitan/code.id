const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "ms-code-betest",
  brokers: ["localhost:9092"],
});
const consumer = kafka.consumer({ groupId: "group1" });

async function consumeMessages() {
  await consumer.connect();
  await consumer.subscribe({
    topic: "kafka_yourname_betest",
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const userData = JSON.parse(message.value.toString());
      // Insert userData into MongoDB
    },
  });
}

module.exports = { consumeMessages };
