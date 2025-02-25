import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration, JoiValidationSchema } from './config';
import { StocksModule } from './stocks/stocks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes the ConfigService global, you can now inject ConfigService anywhere
      envFilePath: '.env', // path to your .env file
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    ApiModule,
    StocksModule,
  ],
})
export class AppModule {}
