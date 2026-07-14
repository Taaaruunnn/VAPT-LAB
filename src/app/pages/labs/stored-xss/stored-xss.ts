import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { CommentService } from '../../../core/services/comment';

@Component({
  selector: 'app-stored-xss',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './stored-xss.html'
})
export class StoredXss implements OnInit {
  private sanitizer = inject(DomSanitizer);
  private commentService = inject(CommentService);

  comments = signal<any[]>([]);

  commentForm = new FormGroup({

    author: new FormControl('', Validators.required),

    content: new FormControl('', Validators.required)

  });

  ngOnInit() {

    this.loadComments();

  }

  loadComments() {

    this.commentService.getComments().subscribe({

      next: (data) => {

        this.comments.set(data);

      }

    });

  }
  trustHtml(content: string) {

  // ======================================
  // VULNERABLE LAB
  // Stored XSS
  // Intentionally bypasses Angular's
  // built-in HTML sanitization.
  // ======================================

  return this.sanitizer.bypassSecurityTrustHtml(content);

}
deleteComment(id: string) {

  this.commentService
      .deleteComment(id)
      .subscribe({

        next: () => {

          this.loadComments();

        }

      });

}

  submit() {

    if (this.commentForm.invalid) {

      this.commentForm.markAllAsTouched();

      return;

    }

    this.commentService
      .addComment(this.commentForm.value)
      .subscribe({

        next: () => {

          this.commentForm.reset();

          this.loadComments();

        }

      });

  }

}