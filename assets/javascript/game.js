$(document).ready(function () {
    console.log("ready!");

    let bulbasaur = {
        name: "Bulbasaur",
        health: 100,
        attack: 20,
        counterAttack: 10,
    }

    let charmander = {
        name: "Charmander",
        health: 120,
        attack: 15,
        counterAttack: 12,
    }

    let squirtle = {
        name: "Squirtle",
        health: 150,
        attack: 12,
        counterAttack: 15,
    }

    let haunter = {
        name: "Haunter",
        health: 180,
        attack: 10,
        counterAttack: 20,
    };

    let heroSelected = false;
    let inBattle = false;
    let yourHero;
    let enemyDefender;

    $(".slot1").html(`<b>${bulbasaur.name}</b><br>HP: ${bulbasaur.health}`);
    $(".slot2").html(`<b>${charmander.name}</b><br>HP: ${charmander.health}`);
    $(".slot3").html(`<b>${squirtle.name}</b><br>HP: ${squirtle.health}`);
    $(".slot4").html(`<b>${haunter.name}</b><br>HP: ${haunter.health}`);

    //Click function to select hero
    $(document).on("click", ".select", function () {
        if (!heroSelected) {
            let hero = $(this).attr("alt");
            heroSelect(hero);
        }
    })

    //Selects hero and moves other ones into enemy container
    function heroSelect(choice) {

        switch (choice) {

            case "bulbasaur":
                $(".hero2").appendTo(".enemy1");
                $(".hero3").appendTo(".enemy2");
                $(".hero4").appendTo(".enemy3");
                $(".holder1").addClass("hero");
                $(".holder2").addClass("enemy");
                $(".holder3").addClass("enemy");
                $(".holder4").addClass("enemy");
                $(".slot1").attr("id", "herotext");
                yourHero = bulbasaur;
                break;

            case "charmander":
                $(".hero1").appendTo(".enemy1");
                $(".hero3").appendTo(".enemy2");
                $(".hero4").appendTo(".enemy3");
                $(".holder2").addClass("hero");
                $(".holder1").addClass("enemy");
                $(".holder3").addClass("enemy");
                $(".holder4").addClass("enemy");
                $(".slot2").attr("id", "herotext");
                yourHero = charmander;
                break;

            case "squirtle":
                $(".hero1").appendTo(".enemy1");
                $(".hero2").appendTo(".enemy2");
                $(".hero4").appendTo(".enemy3");
                $(".holder3").addClass("hero");
                $(".holder1").addClass("enemy");
                $(".holder2").addClass("enemy");
                $(".holder4").addClass("enemy");
                $(".slot3").attr("id", "herotext");
                yourHero = squirtle;
                break;

            case "haunter":
                $(".hero1").appendTo(".enemy1");
                $(".hero2").appendTo(".enemy2");
                $(".hero3").appendTo(".enemy3");
                $(".holder4").addClass("hero");
                $(".holder1").addClass("enemy");
                $(".holder2").addClass("enemy");
                $(".holder3").addClass("enemy");
                $(".slot4").attr("id", "herotext");
                yourHero = haunter;
                break;
        }
        $("#yourchar").text("Your Character");
        $("#enemies").text("Enemies Available To Attack");
        heroSelected = true;
    }


    //Click function to select enemy to battle
    $(document).on("click", ".enemy", function () {
        if (!inBattle) {
            let enemy = $(this).attr("alt");
            selectEnemy(enemy);
        }
    });

    //Selects enemy and moves them to defender section, attack button appears
    function selectEnemy(choice) {

        switch (choice) {

            case "bulbasaur":
                $(".hero1").appendTo(".defender");
                $(".slot1").attr("id", "defendertext");
                enemyDefender = bulbsaur;
                break;

            case "charmander":
                $(".hero2").appendTo(".defender");
                $(".slot2").attr("id", "defendertext");
                enemyDefender = charmander;
                break;

            case "squirtle":
                $(".hero3").appendTo(".defender");
                $(".slot3").attr("id", "defendertext");
                enemyDefender = squirtle;
                break;

            case "haunter":
                $(".hero4").appendTo(".defender");
                $(".slot4").attr("id", "defendertext");
                enemyDefender = haunter;
                break;

        }
        $("#battle").text("Battle!");
        $(".attackButton").html('<button>Attack</button>');
        $("#defend").text("Defender");
        inBattle = true;
    };

    //Attack button functionality
    $(".attackButton").on("click", function () {
        heroBattle();
    });

    //Battle function
    function heroBattle() {

        enemyDefender.health -= yourHero.attack;
        yourHero.health -= enemyDefender.counterAttack;
        yourHero.attack = yourHero.attack + 5;
        $("#herotext").html(`<b>${yourHero.name}</b><br>HP: ${yourHero.health}`)
        $("#defendertext").html(`<b>${enemyDefender.name}</b><br>HP: ${enemyDefender.health}`)
        $("#yourAttack").text(`You attacked ${enemyDefender.name} for ${yourHero.attack} damage.`);
        $("#enemyAttack").text(`${enemyDefender.name} attacked you back for ${enemyDefender.attack} damage.`);

    }

























});