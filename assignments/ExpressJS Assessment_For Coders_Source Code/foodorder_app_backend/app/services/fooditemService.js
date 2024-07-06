const fooditemRepository = require("../database/repositories/fooditemRepository");
const expressAsyncHandler = require("express-async-handler");

const createFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.a HERE */

 try {
    const { name, description, image, categoryId, cuisineId, isVeg } = req.body;
    const result = await fooditemRepository.createFooditem(name, description, image, categoryId, cuisineId, isVeg);

    console.log("In service file  createFooditem", result)
    if (result) {
      res.status(201).json({
        message: "Fooditem created successfully",
      });
    } else {
      res.status(400);
      throw new Error(`Fooditem creation failed`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error creating Fooditem",
      error: err.message,
    });
  }

});

const editFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.b HERE */
});

const deleteFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.c HERE */
});

const getFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.d HERE */
});

const getAllFooditems = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.e HERE */
  try {
    const result = await fooditemRepository.getAllFooditems();
    res.status(200).json({
      data: result,
      message: "Successfully fetched all Fooditems.",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error fetching Fooditems",
      error: err.message,
    });
  }  
});

module.exports = {
  createFooditem,
  editFooditem,
  deleteFooditem,
  getFooditem,
  getAllFooditems,
};
