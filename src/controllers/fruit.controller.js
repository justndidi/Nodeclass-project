import Fruit from "../models/fruit.models.js";

export async function getFruits(req, res) {
  try {
    const fruits = await Fruit.find();
    const search = req.query.search;
   

    let filteredData = fruits;
    if (search){
      filteredData = fruits.filter((fruit)=> {
        if(
          fruit.name.toLowerCase().includes(search.toLowerCase()) ||
          fruit.description.toLowerCase().includes(search.toLowerCase())
        ) {
          return fruit;
        }
      })
    }
    res.status(200).json({ fruits });
  } catch (e) {
    res.json({ error: "An error occured" });
  }
};

export async function addFruits(req, res) {
  const body = req.body;
  const fruit = new Fruit(body);
  try {
    await fruit.save();
    res.send(fruit);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}

export async function getFruit(req, res) {
  const id = req.params.id;
  try {
    const fruit = await Fruit.findById(id);
    if (!fruit) {
      return res.status(404).json({ error: "Fruit not found" });
    }
    res.status(200).json({ fruit });
  } catch (e) {
    res.status(500).json({ error: "An error occured" });
  }
}

export async function editFruit(req, res) {
  const id = req.params.id;
  try {
    const fruit = await Fruit.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!fruit) {
      res.status(404).send({ detail: "Fruit Not Found" });
    }
    res.send(fruit);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}

export async function deleteFruit(req, res) {
  const id = req.params.id;

  try {
    const fruit = await Fruit.findByIdAndDelete(id);
    if (!fruit) {
      return res.status(404).send({ error: "Fruit not found" });
    }
    res.send("Deleted Success");
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}


export async function replaceFruit(req, res) {
  const id = req.params.id;
  try {
    const fruit = await Fruit.findOneAndReplace({ _id: id }, req.body, {
      returnDocument: true,
    });
    if (!fruit) {
      res.status(404).send({ detail: "Fruit Not Found" });
      return;
    }
    res.send(fruit);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}
