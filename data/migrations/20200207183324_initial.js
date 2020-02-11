
exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
        table.increments("id");
        table.string('project_name', 128).notNullable();
        table.string('project_desc');
        table.boolean('project_completed').notNullable().defaultTo(false);
    })

    await knex.schema.createTable('resource', (table) => {
        table.increments("resource_id");
        table.string('resource_name', 128).notNullable();
        table.string('resource_desc');
    })
    await knex.schema.createTable('task', (table) => {
        table.increments("tasks_id");
        table.string('task_desc').notNullable();
        table.string('task_notes');
        table.boolean('task_completed').notNullable()
          .defaultTo(false);
        table.integer('project_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable("project")
          
    })
    await knex.schema.createTable('project_resource', (table) => {
        table.integer('project_id')
            .notNullable()
            .unsigned()
            .references('project.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.integer('resource_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable("resource")
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('project_resource')
  await knex.schema.dropTableIfExists('task')
  await knex.schema.dropTableIfExists('resource')
  await knex.schema.dropTableIfExists('project')
};

