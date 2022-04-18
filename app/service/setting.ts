import { Context, Service } from 'egg';
import { deserialize } from '@hubcarl/json-typescript-mapper';
import Colllection from '../lib/db/collection';
import Setting from '../model/setting';
import Condition from '../lib/condition';

export default class SettingService extends Service {
  private context: Context;
  private colllection: Colllection;
  constructor(ctx: Context) {
    super(ctx);
    this.context = ctx;
    this.colllection = new Colllection(ctx.db, 'setting');
  }

  public async getSettingList(condition: Condition) {
    if (condition.categoryId) {
      condition.where.categoryId = condition.categoryId;
    }
    if (condition.status) {
      condition.where.status = condition.status;
    }
    if (condition.userid) {
      condition.like.title = condition.userid;
    }
    return this.colllection.getPager(condition);
  }

  public async saveSetting(data: object) {
    const setting: Setting = deserialize(Setting, data);
    if (setting.id) {
      return this.colllection.update({ id: setting.id }, setting);
    }
    setting.id = this.context.db.getUniqueId();
    this.colllection.add(setting);
    return setting;
  }

  public async query(json: object) {
    return this.colllection.query(json);
  }

  public async deleteSetting(id: string) {
    return this.colllection.delete({ id });
  }
}
