import { Test, TestingModule } from '@nestjs/testing';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { diskStorage } from 'multer';
import * as fs from 'fs';
import * as path from 'path';

describe('UploadController', () => {
  let app: INestApplication;

  // 테스트 전에 필요한 디렉토리 생성
  const uploadDir = path.join(__dirname, '../../uploads/images');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadController],
      imports: [
        MulterModule.register({
          storage: diskStorage({
            destination: uploadDir, // 테스트용 업로드 디렉토리
            filename: (req, file, callback) => {
              const ext = path.extname(file.originalname);
              const filename = `${Date.now()}${ext}`;
              callback(null, filename);
            },
          }),
        }),
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('should upload a file', async () => {
    const filePath = path.join(__dirname, './test.jpg'); // 실제 테스트용 파일 경로로 변경

    const response = await request(app.getHttpServer())
      .post('/upload/image') // URL 경로를 '/upload/image'로 수정
      .attach('file', filePath) // 파일 업로드
      .expect(201); // 응답 상태 코드

    expect(response.body.message).toBe('success'); // 메시지 수정
    expect(response.body.file).toHaveProperty('originalname', 'test.jpg');
  });

  afterAll(async () => {
    // 업로드된 파일을 삭제합니다 (테스트 종료 후)
    const files = fs.readdirSync(uploadDir);
    files.forEach((file) => {
      fs.unlinkSync(path.join(uploadDir, file));
    });

    await app.close();
  });
});
