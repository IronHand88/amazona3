import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'iron',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'hand',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: '3948394',
      slug: '3948394',
      price: 10,
      category: 'Calibration Due',
      brand: 'sample brand',
      countInStock: 29,
      description: '2" Ball Valve',
      image: '/images/p1.jpg',
      //timestamps: true,
    },
    {
      //_id: '2',
      name: '345334',
      slug: '345334',
      price: 120,
      category: 'Calibration ',
      brand: 'sample brand',
      countInStock: 22,
      description: '3" Pipe',
      image: '/images/p2.jpg',
      //timestamps: true,
    },
    {
      // _id: '3',
      name: '134535',
      slug: '134535',
      category: 'Calibration Ok',
      brand: 'sample brand',
      price: 405,
      countInStock: 15,
      description: '2" Check Valve',
      image: '/images/p3.jpg',

      //timestamps: true,
    },
    {
      //  _id: '4',
      name: '4758594',
      slug: '4758594',
      price: 584,
      category: 'Non Issuie Calibration',
      brand: 'sample brand',
      countInStock: 20,
      description: '3" Butterfly Valve',
      image: '/images/p4.jpg',
      //timestamps: true,
    },
  ],
};
export default data;
