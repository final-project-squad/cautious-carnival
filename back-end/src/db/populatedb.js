const express = require("express");
const router = express.Router();
const { User } = require("../User/user.model");
const { Plant } = require("../Plant/plant.model");

router.get("/", async (req, res) => {
  try {
    const plantArray = [
      {
        name: "Peace Lily Plant",
        maintenance: "moderate",
        lighting: "low-light",
        petFriendly: "no",
        watering: "weekly",
        indoor: "yes",
        notes:
          "It is good to remember, Peace Lily plants do not like direct sunlight. Keep the soil moist.",
      },

      {
        name: "Corn Plant",
        maintenance: "low",
        lighting: "low-light",
        petFriendly: "no",
        watering: "",
        indoor: "yes",
        notes:
          "These plants do not like direct sunlight. Additionally, make sure the soil is slightly damp.",
      },

      {
        name: "Cast Iron Plant",
        maintenance: "low",
        lighting: "low-light",
        petFriendly: "yes",
        watering: "weekly",
        indoor: "yes",
        notes: "These plants do not like direct sunlight.",
      },

      {
        name: "Dragon Tree ",
        maintenance: "low",
        lighting: "low-light",
        petFriendly: "no",
        watering: "weekly",
        indoor: "yes",
        notes: "These plants do not like direct sunlight.",
      },
      {
        name: "Parlor Palm",
        maintenance: "moderate",
        lighting: "low-light",
        petFriendly: "yes",
        watering: "weekly",
        indoor: "yes",
        notes:
          "Also can be grown as a garden or balcony plant. Make sure to water Parlor Palm often during hot weather.",
      },

      {
        name: "Spider Plant",
        maintenance: "low",
        lighting: "partial sun",
        petFriendly: "yes",
        watering: "weekly",
        indoor: "yes",
        notes: "Also, Spider Plant can be grown as a garden or balcony plant.",
      },

      {
        name: "Barberton Daisy",
        maintenance: "low",
        lighting: "sunlight",
        petFriendly: "yes",
        watering: "weekly",
        indoor: "yes",
        notes:
          "Regular watering required. Around 1 inch once a week, and more frequently during hot weather. It is good to remember, Barberton Daisy does not like frost.",
      },

      {
        name: "Aloe Vera",
        maintenance: "low",
        lighting: "partial sun",
        petFriendly: " No",
        watering: "monthly",
        indoor: "yes",
        notes:
          " Check the soil, as the Aloe Vera might require watering every 2-3 weeks.",
      },

      {
        name: "African Violet",
        maintenance: "low",
        lighting: "partial sun",
        petFriendly: "yes",
        watering: "weekly",
        indoor: "yes",
        notes: " Make sure to let the soil dry, before next watering.",
      },

      {
        name: "American Baby Rubber Plant",
        maintenance: "Easy to grow",
        lighting:
          "Bright light, and a couple of hours of direct sunlight needed.",
        petFriendly: "yes",
        watering: "Make sure to let the soil get dry before next watering.",
        indoor: "yes",
      },

      {
        name: "Panda Plant",
        maintenance: "moderate",
        lighting: "partial sun",
        petFriendly: "no",
        watering: "weekly",
        indoor: "yes",
        notes: "Make sure to water the plant when the soil becomes dry.",
      },

      {
        name: "Zebra Plant",
        maintenance: "hard",
        lighting: "low-light",
        petFriendly: "yes",
        watering: "monthly",
        indoor: "yes",
        notes:
          "The plant likes to be moist during the warm season, however during winter time, you can reduce watering and let the soil become slightly dry between each watering. ",
      },

      {
        name: "Begonias",
        maintenance: "high",
        lighting: "partial sun.",
        petFriendly: "no",
        watering: "monthly",
        indoor: "yes",
        notes:
          "Also can be grown as a garden plant. Make sure the soil dries between waterings.",
      },

      {
        name: "Fuchsia",
        maintenance: "moderate",
        lighting: "sunlight.",
        petFriendly: "yes",
        watering: "daily",
        indoor: "yes",
        notes:
          "Also can be grown as a garden or balcony plant, however it is good to take the plant indoors during cold winters. Make sure to water the plant when the soil is dry. Requires regular watering, especially during hot weather.",
      },

      {
        name: "Geranium (Pelargonium)",
        maintenance: "moderate",
        lighting: "sunlight",
        petFriendly: "no",
        watering: "daily",
        indoor: "yes",
        notes:
          "Make sure to check if the soil is dry, it might be required to water the plan every two days to not over-water it.  Also Geranium can be grown as a garden or balcony plant, however it is good to take the plant indoors during cold winters.",
      },

      {
        name: "Abutilon (Flowering Maple) ",
        maintenance: "low",
        lighting: "sunlight",
        petFriendly: "no",
        watering: "monthly",
        indoor: "yes",
        notes:
          "Abutilon can be grown as a garden or balcony plant.Make sure that the soil is dry between the waterings.",
      },

      {
        name: "Caladium Plant",
        maintenance: "high",
        lighting: "low-light",
        petFriendly: "no",
        watering: "weekly",
        indoor: "yes",
        notes:
          "Caladium Plant can be grown as a garden plant, however it is advised to store Caladium plant in the dry, cool spot during cold winters. Make sure to keep the plant moist, but not wet.",
      },

      {
        name: "Gardenia",
        maintenance: "high",
        lighting: "sunlight ",
        petFriendly: "no",
        watering: "no",
        indoor: "yes",
        notes:
          "Gardenia can be grown as a garden or balcony plant. Requires regular watering. 1 inch every week is a minimum. It is vital that the soil does not get completely dry between waterings. Make sure that during high temperatures a shaded spot is provided.",
      },

      {
        name: "Snake Plant",
        maintenance: "low",
        lighting: "partial sun",
        petFriendly: "no",
        watering: "weekly",
        indoor: "yes",
        notes:
          "Snake Plant  can be grown as a garden or balcony plant. This plant does not need much watering, especially during winters. You just need to make sure to water snake plants when the soil gets dry.",
      },

      {
        name: "Flaming Sword Bromeliad",
        maintenance: "low",
        lighting: "partial sun",
        petFriendly: "yes",
        watering: "monthly",
        indoor: "yes",
        notes:
          "You can check the soil after 2-3 weeks, as the plant might need to be watered.",
      },

      {
        name: "Hydrangea ",
        maintenance: "low",
        lighting: "partial sun",
        petFriendly: "no",
        watering: "weekly ",
        indoor: "yes",
        notes:
          "It can be grown as a garden or balcony plant. Hydrangea plants like sunlight. Ideally, direct sunlight in the morning, however a nice shaded spot during the strong midday sun during summer is advised.",
      },

      {
        name: "Mother In Laws Tongue",
        maintenance: "low",
        lighting: "partial sun",
        petFriendly: "no",
        watering: "monthly",
        indoor: "yes",
        notes:
          "This plant may require watering every 2-3 weeks during warm weather.",
      },

      {
        name: "ZZ Plant",
        maintenance: "low",
        lighting: "low-light",
        petFriendly: "no",
        watering: "monthly",
        indoor: "yes",
        notes:
          "Make sure you do not over-water the plant. Only water it when the soil is dry.",
      },

      {
        name: "Amaryllis",
        maintenance: "high",
        lighting: "low-light",
        petFriendly: "no",
        watering: "daily",
        indoor: "yes",
        notes:
          "Amaryllis needs to be regularly checked if watering is needed, as the requirements differ for each plant. It all depends on the conditions where the plant is kept. Make sure not to over-water that beautiful plant. Keep the soil moist, but not wet. ",
      },

      {
        name: "Busy Lizzie",
        maintenance: "moderate",
        lighting: "partial sun",
        petFriendly: "yes",
        watering: "weekly",
        indoor: "yes",
        notes:
          "Usually this plant requires 1 inch of water every week, however if you notice that the soil is getting dry quicker, it means Busy Lizzie needs more frequent watering.",
      },
    ];

      const CreateUserArray = async () => {
          
        const plant1 = await Plant.findOne({ name: "Peace Lily Plant" });
        const plant2 = await Plant.findOne({ name: "Corn Plant" });
        const plant3 = await Plant.findOne({ name: "Cast Iron Plant" });
        const plant4 = await Plant.findOne({ name: "Dragon Tree "});
        const plant5 = await Plant.findOne({ name: "Parlor Palm"});
        const userArray = [
            { name: "Lance", email: "l@book", password:"password", plants: [plant1._id, plant2._id] },
            { name: "Jeremy", email: "j@eremy",  password:"password",plants: [plant2._id, plant3._id, plant4._id, plant5._id] },
          ];
          return userArray
      }

      const clear = async (obj) => {
         await obj.deleteMany({});
      };

    const create = async (obj, testArray) => {
      for (let test of testArray) {
        let db = new obj(test);
        await db.save();
      }
    };

    const deleteCreate = async () => {
      await clear(User);
      await clear(Plant);
      await create(Plant, plantArray);
      await create(User, await CreateUserArray());
      
    };
    deleteCreate();

    res.status(201).send("database populated created");
  } catch (error) {
    res.status(500).send("database populated failed ");
  }
});

module.exports = router;
