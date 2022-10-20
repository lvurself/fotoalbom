const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Photo }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userid' });
      this.hasMany(Photo, { foreignKey: 'albumid' });
    }
  }
  Album.init({
    name: DataTypes.STRING,
    private: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    userid: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};
