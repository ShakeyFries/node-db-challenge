
exports.up = async function(knex) {
  await knex.schema.createTable("project", (table) => {
    table.increments("id")
    table.string("project_name").notNullable()
    table.string("project_description")
    table.boolean("isProjectCompleted").notNullable()
      .defaultTo(false)
  })

  await knex.schema.createTable("resource", (table) => {
    table.increments("resource_id")
    table.string("resource_name").notNullable()
    table.string("resource_description")
  })

  await knex.schema.createTable("tasks", (table) => {
    table.increments("tasks_id")
    table.string("tasks_description").notNullable()
    table.string("tasks_notes")
    table.boolean("isTaskCompleted").notNullable()
      .defaultTo(false)
    table.integer("project_id")
      .notNullable()
      .references("project.id")
      .inTable("project")
  })

  await knex.schema.createTable("project_resource", (table) => {
    table.increments("project_id")
      .notNullable()
      .references("project.id")
      .inTable("project")
    table.increments("resource_id")
      .notNullable()
      .references("resource_id")
      .inTable("resource")
  })
};


  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("projects")
    await knex.schema.dropTableIfExists("resource")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("project_resource")
  };
  

