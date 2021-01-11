-- SQLite
SELECT generator_types.name, generator_values.value
FROM generator_values
INNER JOIN generator_types
ON generator_values.generator_type_id=generator_types.id
AND
generator_values.generator_type_id=2

