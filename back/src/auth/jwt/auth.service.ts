import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/modules/users/interfaces/user.interface';
import { PasswordService } from 'src/modules/users/services/password.service';
import { UsersService } from 'src/modules/users/services/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { sign } from 'jsonwebtoken';

export interface SocialUser {
  id?: any;
  name?: any;
  email?: any;
}

export type GetSocialUserHandler = () => Promise<Partial<SocialUser | any>>;

@Injectable()
export class AuthService {
  usersService: any;
  constructor(
    private userService: UsersService,
    private passwordService: PasswordService,
    private jwtService: JwtService,
  ) {}

  async register(user: any) {
    const existsUser = await this.userService.findOneByEmail(user.email);

    if (!existsUser) {
      const userToRegister = await this.userService.create({
        name: user.name,
        surname: user.surname,
        username: user.username,
        email: user.email,
        rol: user.rol,
        city: user.city,
        picture: user.picture,
      });

      const password = await this.passwordService.create({
        password: await bcrypt.hash(user.password, await bcrypt.genSalt()),
        google_tk: null,
        twitter_tk: null,
        jwt_tk: null,
        userId: userToRegister.id,
      });

      return userToRegister;
    }

    throw new Error('usuario ya existe');
  }

  async login(user: any) {
    const userId = await this.userService.findOneByEmail(user.email);
    const payload = { email: user.email, sub: userId.id };

    if (user.idToken) {
      const tokenFromDb = await this.passwordService.findGoogleByUserId(
        userId.id,
      );

      const jwt: string = sign(payload, 'secret', { expiresIn: 3600 });
      console.log(jwt);

      return {
        username: user.email,
        id: userId.id,
      };
    }

    const success = await this.validateUser(user.email, user.password);
    if (!success) {
      throw new UnauthorizedException('credenciales no validos');
    }

    return {
      username: user.email,
      id: userId.id,
      access_token: this.jwtService.sign(payload, { secret: 'secret' }),
    };
  }

  async validateUser(email: any, password: any): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    const pass = await this.passwordService.findOne(user);

    if (
      user &&
      (await this.passwordsAreEqual((await pass[0]).password, password))
    ) {
      return {
        username: (await user).name,
        password: password,
      };
    }
    return null;
  }

  private async passwordsAreEqual(
    hashedPassword: string,
    plainPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  async loginThirdParty(getSocial: any) {
    const { id, name, email, accessToken } = getSocial;

    const existUser = await this.userService.findOneByEmail(email);

    let existPassword = null;

    if (existUser) {
      existPassword = await this.passwordService.findOneByGoogleId(id);
    }

    //! TODO: REFACTOR IF ELSE
    if (existUser && existPassword) {
      return this.login({
        email: existUser.email,
        id: existUser.id,
      });
    } else if (existUser && !existPassword) {
      return this.login(getSocial);
    } else {
      const user = await this.userService.create({
        name: getSocial.name,
        surname: getSocial.lastName,
        username: getSocial.name,
        email: getSocial.email,
        rol: 'user',
        city: 'almeria',
        picture: getSocial.photoUrl,
        password: '',
      });

      await this.passwordService.createWithGoogle({
        user: user,
        google_tk: getSocial.idToken,
        userId: user.id,
      });
    }
  }
}
