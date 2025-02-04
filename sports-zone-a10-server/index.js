const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.csovo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


app.use(cors());
app.use(express.json());

async function run() {
    try {
        
        // await client.connect();

        const equipmentCollection = client.db('equipmentDB').collection('equipment');
        

        
        app.get('/equipment', async (req, res) => {
            try {
                const cursor = equipmentCollection.find();
                const result = await cursor.toArray();
                res.send(result);
            } catch (error) {
                console.error('Error fetching equipment:', error);
                res.status(500).send({ message: "Internal Server Error" });
            }
        });

        
        app.get('/equipment/user/:email', async (req, res) => {
            const { email } = req.params;
            try {
                const userEquipments = await equipmentCollection.find({ userEmail: email }).toArray();
                res.send(userEquipments);
            } catch (error) {
                console.error('Error fetching user-specific equipment:', error);
                res.status(500).send({ message: "Internal Server Error" });
            }
        });

        
        app.get('/equipment/:id', async (req, res) => {
            const { id } = req.params;
            if (!ObjectId.isValid(id)) {
                return res.status(400).send({ message: "Invalid ObjectId format" });
            }
            try {
                const equipment = await equipmentCollection.findOne({ _id: new ObjectId(id) });
                if (!equipment) {
                    return res.status(404).send({ message: "Equipment not found" });
                }
                res.send(equipment);
            } catch (error) {
                console.error("Error fetching equipment by ID:", error);
                res.status(500).send({ message: "Internal Server Error" });
            }
        });

        
        app.post('/equipment', async (req, res) => {
            const newEquipment = req.body;
            try {
                const result = await equipmentCollection.insertOne(newEquipment);
                res.send(result);
            } catch (error) {
                console.error("Error adding new equipment:", error);
                res.status(500).send({ message: "Internal Server Error" });
            }
        });

        
        app.put('/equipment/:id', async (req, res) => {
            const { id } = req.params;
            const updatedEquipment = req.body;
            try {
                const result = await equipmentCollection.updateOne(
                    { _id: new ObjectId(id) },
                    { $set: updatedEquipment }
                );
                if (result.modifiedCount === 0) {
                    return res.status(404).send({ message: "Equipment not found or no changes made" });
                }
                res.send({ message: "Equipment updated successfully" });
            } catch (error) {
                console.error("Error updating equipment:", error);
                res.status(500).send({ message: "Internal Server Error" });
            }
        });


        
        app.delete('/equipment/:id', async (req, res) => {
            const { id } = req.params;
            try {
                const result = await equipmentCollection.deleteOne({ _id: new ObjectId(id) });
                if (result.deletedCount === 1) {
                    res.send({ message: 'Equipment deleted successfully' });
                } else {
                    res.status(404).send({ message: 'Equipment not found' });
                }
            } catch (error) {
                console.error("Error deleting equipment:", error);
                res.status(500).send({ message: "Internal Server Error" });
            }
        });

        

        
        
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        
        
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Sports zone server is running');
});

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});

