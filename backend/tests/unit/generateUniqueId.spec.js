const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('deveria criar um unico id', () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  });
});