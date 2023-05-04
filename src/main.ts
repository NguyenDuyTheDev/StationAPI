import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Bike Renting API')
    .setDescription('REST API đơn giản cho việc lưu trữ thông tin thuê xe')
    .setVersion('1.0')
    .addTag('Bike')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  const fs = require('fs');
  fs.writeFileSync("./swagger-spec.json", JSON.stringify(document));
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();