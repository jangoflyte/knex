/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('theater').del()
  await knex("theater").insert([
    { id: 1, name: "Patriot", location: "Denver", movie_id: 1 },
    { id: 2, name: "AMC", location: "Chicago", movie_id: 2 },
    { id: 3, name: "Regal", location: "Phoenix", movie_id: 3 },
  ]);
};
