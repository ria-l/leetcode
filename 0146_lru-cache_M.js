// 7:24pm
// cache with a key and a value
// return value if key is there
// if not, call a function to add into the cache

// cache is an array, format [[key1, val1],[key2, val2] ... ] for a given capacity
// this.cache = [key1, key2, key3, key4] with end of array being the most recent
// get from the cache
// check if key is in cache
//   yes: return value, assign key to recency variable
//   no:  add to cache
// add to the cache
// is there room? (check if length of recent = capacity)
//   yes: if there is room, just create new
//   no:  if no room, delete oldest variable (recent[0]), then add new variable
// replace oldest value. update recency variable

/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get = (key) => {
    if (this.cache.has(key)) {
      const val = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, val);
      return val;
    } else {
      return -1;
    }
  };

  put = (key, value) => {
    if (this.cache.size >= this.capacity && !this.cache.has(key)) {
      const oldest = this.cache.keys().next().value;
      this.cache.delete(oldest);
    }
    this.cache.delete(key);
    this.cache.set(key, value);
  };
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
