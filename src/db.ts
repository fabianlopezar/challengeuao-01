import Dexie, { type EntityTable } from "dexie";

export interface FrutaRecord {
  id?: number;
  nombre: string;
  proveedor?: string;
  fechaCosecha?: string;
  createdAt?: string;
}

class AppDB extends Dexie {
  frutas!: EntityTable<FrutaRecord, "id">;

  constructor() {
    super("MiAppDB");
    this.version(1).stores({
      frutas: "++id, nombre, createdAt",
      users: "++id, &email",
    });
    this.version(2).stores({
      frutas: "++id, nombre, proveedor, fechaCosecha, createdAt",
    });
  }
}

const db = new AppDB();
export default db;
