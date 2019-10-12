$(document).ready(function () {
    console.log("ready!");

    let hero1 = {
        name: "Bulbasaur",
        health: 100,
        attack: 18,
        counterAttack: 18,
    }

    let hero2 = {
        name: "Charmander",
        health: 120,
        attack: 15,
        counterAttack: 15,
    }

    let hero3 = {
        name: "Squirtle",
        health: 150,
        attack: 12,
        counterAttack: 12,
    }

    let hero4 = {
        name: "Haunter",
        health: 180,
        attack: 10,
        counterAttack: 10,
    };

    let heroSelected = false;
    let inBattle = false;
    let yourHero;
    let enemyDefender;
    let numEnemies = 3;

    $(".slot1").html(`<b>${hero1.name}</b><br>HP: ${hero1.health}`);
    $(".slot2").html(`<b>${hero2.name}</b><br>HP: ${hero2.health}`);
    $(".slot3").html(`<b>${hero3.name}</b><br>HP: ${hero3.health}`);
    $(".slot4").html(`<b>${hero4.name}</b><br>HP: ${hero4.health}`);

    //Click function to select hero
    $(document).on("click", ".select", function () {
        if (!heroSelected) {
            let hero = $(this).attr("alt");
            heroSelect(hero);
        }
    })

    //Moves unselected heroes to enemies and selects your hero
    //Hero 1
    function selectHero1() {
        $(".hero2").appendTo(".enemy1");
        $(".hero3").appendTo(".enemy2");
        $(".hero4").appendTo(".enemy3");
        $(".holder1").addClass("hero");
        $(".holder2").addClass("enemy");
        $(".holder3").addClass("enemy");
        $(".holder4").addClass("enemy");
        $(".slot1").attr("id", "heroText");
        yourHero = hero1;
    }

    //Hero2
    function selectHero2() {
        $(".hero1").appendTo(".enemy1");
        $(".hero3").appendTo(".enemy2");
        $(".hero4").appendTo(".enemy3");
        $(".holder2").addClass("hero");
        $(".holder1").addClass("enemy");
        $(".holder3").addClass("enemy");
        $(".holder4").addClass("enemy");
        $(".slot2").attr("id", "heroText");
        yourHero = hero2;
    }

    //Hero3
    function selectHero3() {
        $(".hero1").appendTo(".enemy1");
        $(".hero2").appendTo(".enemy2");
        $(".hero4").appendTo(".enemy3");
        $(".holder3").addClass("hero");
        $(".holder1").addClass("enemy");
        $(".holder2").addClass("enemy");
        $(".holder4").addClass("enemy");
        $(".slot3").attr("id", "heroText");
        yourHero = hero3;
    }

    //Hero4
    function selectHero4() {
        $(".hero1").appendTo(".enemy1");
        $(".hero2").appendTo(".enemy2");
        $(".hero3").appendTo(".enemy3");
        $(".holder4").addClass("hero");
        $(".holder1").addClass("enemy");
        $(".holder2").addClass("enemy");
        $(".holder3").addClass("enemy");
        $(".slot4").attr("id", "heroText");
        yourHero = hero4;
    }
    //Selects hero and moves other ones into enemy container
    function heroSelect(choice) {

        switch (choice) {

            case "bulbasaur":
                selectHero1();
                break;

            case "charmander":
                selectHero2();
                break;

            case "squirtle":
                selectHero3();
                break;

            case "haunter":
                selectHero4();
                break;
        }
        $("#enemies").css("visibility", "visible");
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
                $(".hero1").appendTo(".defense");
                $(".slot1").attr("id", "defenderText");
                enemyDefender = hero1;
                break;

            case "charmander":
                $(".hero2").appendTo(".defense");
                $(".slot2").attr("id", "defenderText");
                enemyDefender = hero2;
                break;

            case "squirtle":
                $(".hero3").appendTo(".defense");
                $(".slot3").attr("id", "defenderText");
                enemyDefender = hero3;
                break;

            case "haunter":
                $(".hero4").appendTo(".defense");
                $(".slot4").attr("id", "defenderText");
                enemyDefender = hero4;
                break;

        }
        initializeBattle();
    };

    //Adds attack button and displays battle text
    function initializeBattle() {
        $("#battle").text("Battle!").css("visibility", "visible");
        $(".attackButton").html('<button type="button" class="btn btn-primary btn-lg attackColor">Attack</button>')
        $("#defend").text("Defender").css("visibility", "visible");
        $(".battleLog").css("visibility", "visible");
        $("#finalOutcome").text("Attack!");
        $("#enemyAttack").empty();
        $("#yourAttack").empty();
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
        $("#heroText").html(`<b>${yourHero.name}</b><br>HP: ${yourHero.health}`)
        $("#defenderText").html(`<b>${enemyDefender.name}</b><br>HP: ${enemyDefender.health}`)
        $("#yourAttack").text(`You attacked ${enemyDefender.name} for ${yourHero.attack} damage.`);
        $("#enemyAttack").text(`${enemyDefender.name} attacked you back for ${enemyDefender.attack} damage.`);

        if (yourHero.health < 1) {
            $("#heroText").html(`<b>${yourHero.name}</b><br>HP: 0`)
            $(".attackButton").empty();
            $("#finalOutcome").text("You died!");
            $(".resetButton").html('<button>Restart</button>');
        }


        if (enemyDefender.health < 1) {
            $(".attackButton").empty();
            $(".defense").empty();
            $("#finalOutcome").text("You won the fight! Select a new enemy.");
            $("#defend").empty();
            inBattle = false;
            numEnemies--;
        }

        if (numEnemies < 1) {
            $(".attackButton").empty();
            $(".defense").empty();
            $("#finalOutcome").text("Game Over! You won!");
            $(".resetButton").html('<button>Restart</button>');
        }

    }


    //Reset button functionality
    $(".resetButton").on("click", function () {
        resetGame();

    })
    //Reset function
    function resetGame() {
        window.location.reload();
    }


























});