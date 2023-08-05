import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://sergeychinin:Dasdimon1991@cluster0.klfqmom.mongodb.net/music_platform?retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    ]
        
})
export class AppModule{}