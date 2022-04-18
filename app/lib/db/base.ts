'use strict';
import Condition from '../condition';
import * as path from 'path';
import * as shortid from 'shortid';
import { PlainObject } from 'egg';

const dbpath = path.resolve(__dirname, 'setting.json');

export default class DB {
  public instance: any;
  public name: string;
  constructor(name: string = dbpath) {
    this.name = name;
  }

  public getUniqueId() {
    return shortid.generate();
  }

  public get(collectionName: string) {
    return null;
  }

  public query(collectionName: string, json: PlainObject) {
    return null;
  }

  public add(collectionName: string, json: PlainObject) {
    return null;
  }

  public update(collectionName: string, where: PlainObject, json: PlainObject) {
    return null;
  }

  public delete(collectionName: string, field: any) {
    return null;
  }

  public getPager(collectionName: string, condition: Condition): any {
    return null;
  }
}