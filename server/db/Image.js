const conn = require('./conn');
const Image = conn.define('image', {
  id: {
    type: conn.Sequelize.UUID,
    defaultValue: conn.Sequelize.UUIDV4,
    primaryKey: true
  },
  data: {
    type: conn.Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Image;
