import crc32 from 'crc-32';

/* Create hash table */
const make = () => [];

const hashTable = make();

/* Set hash table value */
const set = (map, key, value) => {
  const hash = crc32.str(key);
  const mapKey = Math.abs(hash) % 1000;

  if (map.hasOwnProperty(mapKey)) {
    const [existingKey] = map[mapKey];
    if (key !== existingKey) return false;
  }

  map[mapKey] = [key, value];
};

/* Get hash table value */
const get = (map, key, defaultValue = null) => {
  const hash = crc32.str(key);
  const mapKey = Math.abs(hash) % 1000;

  if (!map.hasOwnProperty(mapKey)) return defaultValue;

  const [existingKey, value] = map[mapKey];

  if (existingKey !== key) return defaultValue;

  return value;
};


set(hashTable, 'key', 'value');
set(hashTable, 'key2', 'value2');
console.log(get(hashTable, 'key', 'NO_VALUE'));
console.log(get(hashTable, 'key2', 'NO_VALUE'));
console.log(get(hashTable, 'key3', 'NO_VALUE'));