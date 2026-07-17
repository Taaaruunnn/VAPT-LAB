import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadService } from '../../core/services/upload.service';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report.html'
})
export class Reports implements OnInit {

  private uploadService = inject(UploadService);

  selectedFile: File | null = null;

  uploads: any[] = [];

  ngOnInit(): void {

    this.loadUploads();

  }

  onFileSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {

      this.selectedFile = input.files[0];

    }

  }

  uploadFile(): void {

    if (!this.selectedFile) {

      alert("Please select a file.");

      return;

    }

    this.uploadService.upload(this.selectedFile).subscribe({

      next: () => {

        alert("File uploaded successfully.");

        this.selectedFile = null;

        this.loadUploads();

      },

      error: (err) => {

        alert(err.error?.message || "Upload failed.");

      }

    });

  }

  loadUploads(): void {

    this.uploadService.getUploads().subscribe({

      next: (data) => {

        this.uploads = data;

      }

    });

  }

  deleteFile(id: string): void {

    if (!confirm("Delete this file?")) {

      return;

    }

    this.uploadService.deleteUpload(id).subscribe({

      next: () => {

        this.loadUploads();

      }

    });

  }

}