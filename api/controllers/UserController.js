/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function (req, res) {
    var user = {name:'zhangsan',age:18};
    User.create(user).exec(function (err, records) {
      return res.view('myjade.jade',{user:user});
    });
  },


  /**
   * `UserController.index()`
   */
  index: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },


  /**
   * `UserController.list()`
   */
  list: function (req, res) {
    return res.json({
      todo: 'list() is not implemented yet!'
    });
  },


  /**
   * `UserController.add()`
   */
  add: function (req, res) {
    return res.json({
      todo: 'add() is not implemented yet!'
    });
  },


  /**
   * `UserController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `UserController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
};

