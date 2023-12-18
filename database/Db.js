const mongoose = require('mongoose')

//configure mongoose
mongoose.connect(
    process.env.MONGO_URL || 'mongodb+srv://parth_321:ParthButani401@parthtest.mutkksi.mongodb.net/',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Connected to MongoDB');
      }
    }
  );