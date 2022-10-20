const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Album }) {
      // define association here
      this.belongsTo(Album, { foreignKey: 'albumid' });
    }
  }
  Photo.init({
    name: DataTypes.TEXT,
    albumid: DataTypes.INTEGER,
    something: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};
