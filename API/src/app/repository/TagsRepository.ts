import { EntityRepository, Repository } from "typeorm";
import { Tags } from "../../database/entities/Tags";

@EntityRepository(Tags)
class TagsRepositories extends Repository<Tags> {}

export { TagsRepositories }