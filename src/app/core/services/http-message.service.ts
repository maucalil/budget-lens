import { Injectable } from '@angular/core';

type MessageType = 'success' | 'error';
type HttpMethod = 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type MessageMap = Record<
  string,
  Partial<Record<HttpMethod, Partial<Record<MessageType, string>>>>
>;

@Injectable({
  providedIn: 'root',
})
export class HttpMessageService {
  private readonly messages: MessageMap = {
    'user/login': {
      POST: {
        error: 'Erro ao fazer login. Email ou senha inválidos.',
      },
    },
    transaction: {
      POST: {
        success: 'Transação criada com sucesso.',
        error: 'Falha ao criar transação.',
      },
      PUT: {
        success: 'Transação atualizada com sucesso.',
        error: 'Erro ao atualizar transação.',
      },
      DELETE: {
        success: 'Transação excluída com sucesso.',
        error: 'Erro ao excluir transação.',
      },
    },
    account: {
      POST: {
        success: 'Conta criada com sucesso.',
        error: 'Falha ao criar conta.',
      },
      PUT: {
        success: 'Conta atualizada com sucesso.',
        error: 'Erro ao atualizar conta.',
      },
      DELETE: {
        success: 'Conta excluída com sucesso.',
        error: 'Erro ao excluir conta.',
      },
    },
  };

  getMessage(
    url: string,
    method: string,
    type: MessageType
  ): string | undefined {
    const key = this.extractKey(url);
    return this.messages[key]?.[method as HttpMethod]?.[type];
  }

  private extractKey(url: string): string {
    const path = url.split('?')[0];
    const segments = path.split('/').filter(Boolean);

    const v1Index = segments.indexOf('v1');
    if (v1Index === -1) return '';

    const keys: string[] = [];
    for (let i = v1Index + 1; i < segments.length && keys.length < 2; i++) {
      if (!/^\d+$/.test(segments[i])) {
        keys.push(segments[i]);
      } else {
        break;
      }
    }

    return keys.join('/');
  }
}
