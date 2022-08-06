import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  images: [
    {
      type: String,
      required: true
    }
  ],
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  avg_rating: {
    type: Number,
    required: true,
    default : 0
  },
  number_of_reviews: {
    type: Number,
    required: true,
    default : 0
  },
  price: {
    type: Number,
    required: true
  },
  in_stock: {
    type: Number,
    required: true
  },
  reviews: [{
    comment: {
      type: String,
      required: true
    }
  }]
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product