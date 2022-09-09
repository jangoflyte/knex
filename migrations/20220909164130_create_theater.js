/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("theater", (table) => {
    table.increments("id"); // adds an auto incrementing PK column
    table.string("name").notNullable();
    table.string("location");
    table.integer("movie_id");
    table.foreign("movie_id").references("movies.id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("theater");
};
