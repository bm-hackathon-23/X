/*
 * 
 *                  xxxxxxx      xxxxxxx
 *                   x:::::x    x:::::x 
 *                    x:::::x  x:::::x  
 *                     x:::::xx:::::x   
 *                      x::::::::::x    
 *                       x::::::::x     
 *                       x::::::::x     
 *                      x::::::::::x    
 *                     x:::::xx:::::x   
 *                    x:::::x  x:::::x  
 *                   x:::::x    x:::::x 
 *              THE xxxxxxx      xxxxxxx TOOLKIT
 *                    
 *                  http://www.goXTK.com
 *                   
 * Copyright (c) 2012 The X Toolkit Developers <dev@goXTK.com>
 *                   
 *    The X Toolkit (XTK) is licensed under the MIT License:
 *      http://www.opensource.org/licenses/mit-license.php
 * 
 *
 * 
 * 
 */

// provides
goog.provide('X.fibers');

// requires
goog.require('X.object');



/**
 * Create fibers. Fibers are displayable objects and can be loaded from a file.
 * 
 * @constructor
 * @extends X.object
 * @mixin X.loadable
 */
X.fibers = function() {

  //
  // call the standard constructor of X.object
  goog.base(this);
  
  //
  // class attributes
  
  /**
   * @inheritDoc
   * @const
   */
  this._classname = 'fibers';
  
  // inject functionality
  inject(this, new X.loadable()); // this object is loadable from a file
  

  /**
   * The bounding box.
   * 
   * @type {!Array}
   * @protected
   */  
  this._boundingBox = [0, 0, 0, 0, 0, 0];


  
  /**
   * 
   * 
   * @type {boolean}
   * @protected
   */  
  this._useCuboidCropping = false;


  /**
   * The cropping cuboid box.
   * 
   * @type {!Array}
   * @protected
   */  
  this._crop = [0, 0, 0, 0, 0, 0];

/**
 * Get the bounding box of this fibers.
 * 
 * @return {!Array} The bounding box as an array [minX, maxX, minY, maxY, minZ, maxZ].
 * @public
 */
X.fibers.prototype.__defineGetter__('boundingBox', function() {

  return this._boundingBox;
  
});


/**
 * 
 * 
 * @return {boolean} 
 * @public
 */
X.fibers.prototype.__defineGetter__('useCuboidCropping', function() {

  return this._useCuboidCropping;
  
});

/**
 * 
 *
 * @param {boolean} .
 */
X.fibers.prototype.__defineSetter__('useCuboidCropping', function(useCuboidCropping) {

  this._useCuboidCropping = useCuboidCropping;

});



/**
 * Get the cropping volume box.
 * 
 * @return {!Array} The cropping volume box as an array [minX, maxX, minY, maxY, minZ, maxZ].
 * @public
 */
X.fibers.prototype.__defineGetter__('crop', function() {

  return this._crop;
  
});


/**
 * Set the cropping volume box.
 * 
 * @param {!Array} The cropping volume box as an array [minX, maxX, minY, maxY, minZ, maxZ].
 * @public
 */
X.fibers.prototype.__defineSetter__('crop', function(crop) {
  this._crop = crop.slice();
});



};
// inherit from X.object
goog.inherits(X.fibers, X.object);

// export symbols (required for advanced compilation)
goog.exportSymbol('X.fibers', X.fibers);
