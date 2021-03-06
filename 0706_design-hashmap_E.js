// 14:01 -> 14:30
// Design a HashMap without using any built-in hash table libraries.

// To be specific, your design should include these functions:

// put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
// get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

class MyHashMap {
  numBuckets = 10;
  constructor() {
    this.storage = Array(this.numBuckets);
    for (let i = 0; i < this.storage.length; i++) {
      this.storage[i] = [];
    }
  }

  hash = (value) => {
    let index = 0;
    const valueStr = value.toString();
    for (let i = 0; i < valueStr.length; i++) {
      index += valueStr.charCodeAt(i);
    }
    return index % this.numBuckets;
  };

  /**
   * value will always be non-negative.
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put = (key, value) => {
    const index = this.hash(key);
    const bucket = this.storage[index];
    const i = bucket.findIndex((e) => e[0] === key);
    if (i >= 0) {
      bucket[i] = [key, value];
    } else {
      bucket.push([key, value]);
    }
  };

  /**
   * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
   * @param {number} key
   * @return {number}
   */
  get = (key) => {
    const index = this.hash(key);
    const bucket = this.storage[index];
    const i = bucket.findIndex((e) => e[0] === key);
    if (i >= 0) {
      return bucket[i][1];
    } else {
      return -1;
    }
  };

  /**
   * Removes the mapping of the specified value key if this map contains a mapping for the key
   * @param {number} key
   * @return {void}
   */
  remove = (key) => {
    const index = this.hash(key);
    const bucket = this.storage[index];
    const i = bucket.findIndex((e) => e[0] === key);
    if (i >= 0) {
      bucket.splice(i, 1);
    }
  };
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

var obj = new MyHashMap();

obj.remove(27);
obj.put(65, 65);
obj.remove(19);
obj.remove(0);
obj.get(18);
obj.remove(3);
obj.put(42, 0);
obj.get(19);
obj.remove(42);
obj.put(17, 90);
obj.put(31, 76);
obj.put(48, 71);
obj.put(5, 50);
obj.put(7, 68);
obj.put(73, 74);
obj.put(85, 18);
obj.put(74, 95);
obj.put(84, 82);
obj.put(59, 29);
obj.put(71, 71);
obj.remove(42);
obj.put(51, 40);
obj.put(33, 76);
obj.get(17);
obj.put(89, 95);
obj.get(95);
obj.put(30, 31);
obj.put(37, 99);
obj.get(51);
obj.put(95, 35);
obj.remove(65);
obj.remove(81);
obj.put(61, 46);
obj.put(50, 33);
obj.get(59);
obj.remove(5);
obj.put(75, 89);
obj.put(80, 17);
obj.put(35, 94);
obj.get(80);
obj.put(19, 68);
obj.put(13, 17);
obj.remove(70);
obj.put(28, 35);
obj.remove(99);
obj.remove(37);
obj.remove(13);
obj.put(90, 83);
obj.remove(41);
obj.get(50);
obj.put(29, 98);
obj.put(54, 72);
obj.put(6, 8);
obj.put(51, 88);
obj.remove(13);
obj.put(8, 22);
obj.get(85);
obj.put(31, 22);
obj.put(60, 9);
obj.get(96);
obj.put(6, 35);
obj.remove(54);
obj.get(15);
obj.get(28);
obj.remove(51);
obj.put(80, 69);
obj.put(58, 92);
obj.put(13, 12);
obj.put(91, 56);
obj.put(83, 52);
obj.put(8, 48);
obj.get(62);
obj.get(54);
obj.remove(25);
obj.put(36, 4);
obj.put(67, 68);
obj.put(83, 36);
obj.put(47, 58);
obj.get(82);
obj.remove(36);
obj.put(30, 85);
obj.put(33, 87);
obj.put(42, 18);
obj.put(68, 83);
obj.put(50, 53);
obj.put(32, 78);
obj.put(48, 90);
obj.put(97, 95);
obj.put(13, 8);
obj.put(15, 7);
obj.remove(5);
obj.remove(42);
obj.get(20);
obj.remove(65);
obj.put(57, 9);
obj.put(2, 41);
obj.remove(6);
obj.get(33);
obj.put(16, 44);
obj.put(95, 30);
