const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/add', async (req, res) => {
    // console.log('adding a monster, req.body is', req.body)
    console.log('req.body.skills = ', req.body.skills)
    let connection = await pool.connect();
    try {
        await connection.query('BEGIN');
        const monsterInsertDetails = await connection.query(
            'INSERT INTO monsters (alignment, armor_class, armor_desc, challenge_rating, charisma, condition_immunities, constitution, damage_immunities, damage_resistances, damage_vulnerabilities, dexterity, hit_dice, hit_points, intelligence, languages, legendary_desc, name, reactions, senses, size, slug, strength, subtype, type, wisdom, strength_save, constitution_save, dexterity_save, intelligence_save, wisdom_save, charisma_save) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31) returning id;',
            [req.body.alignment, req.body.armor_class, req.body.armor_desc, req.body.challenge_rating, req.body.charisma, req.body.condition_immunities, req.body.constitution, req.body.damage_immunities, req.body.damage_resistances, req.body.damage_vulnerabilities, req.body.dexterity, req.body.hit_dice, req.body.hit_points, req.body.intelligence, req.body.languages, req.body.legendary_desc, req.body.name, req.body.reactions, req.body.senses, req.body.size, req.body.slug, req.body.strength, req.body.subtype, req.body.type, req.body.wisdom, req.body.strength_save, req.body.constitution_save, req.body.dexterity_save, req.body.intelligence_save, req.body.wisdom_save, req.body.charisma_save]
        );
        const monsterId = monsterInsertDetails.rows[0].id;
        console.log('the returned ID is', monsterId)
        await connection.query(
            'INSERT INTO monsters_skills (monster_id, acrobatics, animal_handling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleight_of_hand, stealth, survival) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19);', 
            [monsterId, req.body.skills.acrobatics, req.body.skills.animal_handling, req.body.skills.arcana, req.body.skills.athletics, req.body.skills.deception, req.body.skills.history, req.body.skills.insight, req.body.skills.intimidation, req.body.skills.investigation, req.body.skills.medicine, req.body.skills.nature, req.body.skills.perception, req.body.skills.performance, req.body.skills.persuasion, req.body.skills.religion, req.body.skills.sleight_of_hand, req.body.skills.stealth, req.body.skills.survival]);
        for( let i=0; i< req.body.actions.length; i++){
            await connection.query('INSERT INTO monsters_actions (attack_bonus, damage_bonus, damage_dice, description, name, monster_id) VALUES ($1, $2, $3, $4, $5, $6);', 
            [req.body.actions[i].attack_bonus, req.body.actions[i].damage_bonus, req.body.actions[i].damage_dice, req.body.actions[i].desc, req.body.actions[i].name, monsterId]);
        }
        for( let i=0; i< req.body.legendary_actions.length; i++){
            await connection.query('INSERT INTO monsters_legendary_actions (description, name, monster_id) VALUES ($1, $2, $3);', 
            [req.body.legendary_actions[i].desc, req.body.legendary_actions[i].name, monsterId]);
        }
        await connection.query('COMMIT');
        res.sendStatus(201)
    }
    catch (error) {
        console.log(error);
        await connection.query('ROLLBACK');
        res.sendStatus(500);
    }
    finally {
        connection.release();
    }
})

module.exports = router;