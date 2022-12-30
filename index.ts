import {Kysely} from "kysely";

const db = new Kysely<DB>(0 as any);

interface DB {
    user: UserTable;
}

interface UserTable {
    age: number;
}

db.insertInto("user").values(0);
db.insertInto("user").values("");
db.insertInto("user").values(true);
db.insertInto("user").values(new URLSearchParams());

db.insertInto("user").values([0, 0]);
db.insertInto("user").values(["", ""]);
db.insertInto("user").values([true, false]);
db.insertInto("user").values([new URLSearchParams(), new HTMLInputElement()]);
